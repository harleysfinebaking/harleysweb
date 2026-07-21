'use client'

import React, { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Define validation schema
// Define validation schema with discriminated union for conditional fields
const base = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  mobileNumber: z.string().regex(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  connectionType: z.enum(['Customised Cakes', 'Bulk Orders', 'Other Events']),
})

const customised = base.extend({
  connectionType: z.literal('Customised Cakes'),
  quantity: z.coerce.number().min(2, 'Quantity must be at least 2 kg'),
  dateOfRequirement: z
    .string()
    .refine((val) => {
      if (!val) return false
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const d = new Date(val)
      d.setHours(0, 0, 0, 0)
      return d >= today
    }, { message: 'Date of requirement cannot be before today' }),
  event: z.string().min(1, 'Event type is required'),
  flavorInstructions: z.string().min(1, 'Please specify flavor or instructions'),
  referenceImage: z.string().optional(),
  requirements: z.string().optional(),
})

const bulk = base.extend({
  connectionType: z.literal('Bulk Orders'),
  requirements: z.string().min(5, 'Please describe your requirements'),
  quantity: z.any().optional(),
  dateOfRequirement: z.any().optional(),
  event: z.any().optional(),
  flavorInstructions: z.any().optional(),
  referenceImage: z.string().optional(),
})

const otherEvent = base.extend({
  connectionType: z.literal('Other Events'),
  requirements: z.string().min(5, 'Please describe your requirements'),
  quantity: z.any().optional(),
  dateOfRequirement: z.any().optional(),
  event: z.any().optional(),
  flavorInstructions: z.any().optional(),
  referenceImage: z.string().optional(),
})

const inquirySchema = z.discriminatedUnion('connectionType', [customised, bulk, otherEvent])

type InquiryFormData = z.infer<typeof inquirySchema>

export function BusinessInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [submitMessage, setSubmitMessage] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      connectionType: undefined,
    },
  })

  const connectionType = watch('connectionType')
  const referenceImageValue = watch('referenceImage')

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const base64String = event.target?.result as string
        // Store the base64 string in the form
        const input = e.target
        if (input) {
          (input as any).value = base64String
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Get the base64 image data if it exists
      const imageInput = fileInputRef.current
      let referenceImageData = ''
      
      if (imageInput && imageInput.files?.[0] && connectionType === 'Customised Cakes') {
        const reader = new FileReader()
        await new Promise((resolve) => {
          reader.onload = (event) => {
            referenceImageData = event.target?.result as string
            resolve(null)
          }
          reader.readAsDataURL(imageInput.files![0])
        })
      }

      const payload = {
        ...data,
        referenceImage: referenceImageData,
      }

      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your inquiry has been sent successfully. We will get back to you soon.')
        reset()
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        setSubmitStatus('error')
        setSubmitMessage('Failed to send your inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-[#FEFEFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center text-black-800 ">
            Connect With Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Tell us about your customized cake needs, bulk orders, or special events.
          </p>

          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitStatus === 'success'
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'bg-blue-100 text-blue-700 border border-blue-300'
              }`}
            >
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-blue-800 font-medium mb-2">
                Full Name *
              </label>
              <input
                {...register('fullName')}
                type="text"
                id="fullName"
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm mt-1">{errors.fullName.message}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-blue-800 font-medium mb-2">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-blue-800 font-medium mb-2">
                Mobile Number *
              </label>
              <input
                {...register('mobileNumber')}
                type="tel"
                id="mobileNumber"
                placeholder="10-digit mobile number"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</span>
              )}
            </div>

            {/* Connection Type */}
            <div>
              <label htmlFor="connectionType" className="block text-blue-800 font-medium mb-2">
                What would you like to connect for? *
              </label>
              <select
                {...register('connectionType')}
                value={connectionType ?? ''}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg"
              >
                <option value="" disabled>Choose One</option>
                <option value="Customised Cakes">Customised Cakes</option>
                <option value="Bulk Orders">Bulk Orders</option>
                <option value="Other Events">Other Events</option>
              </select>
            </div>

            {/* Conditional Fields for Customised Cakes */}
            {connectionType === 'Customised Cakes' && (
              <>
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-blue-800 font-medium mb-4">Customised Cake Details</h3>

                  {/* Quantity */}
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block text-blue-800 font-medium mb-2">
                      Quantity of Cake (kg) *
                    </label>
                    <input
                      {...register('quantity', { valueAsNumber: true })}
                      type="number"
                      id="quantity"
                      placeholder="e.g., 2"
                      min={2}
                      step="0.5"
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.quantity && (
                      <span className="text-red-500 text-sm mt-1">{(errors as any).quantity?.message}</span>
                    )}
                  </div>

                  {/* Date of Requirement */}
                  <div className="mb-4">
                    <label htmlFor="dateOfRequirement" className="block text-blue-800 font-medium mb-2">
                      Date of Requirement *
                    </label>
                    <input
                      {...register('dateOfRequirement')}
                      type="date"
                      id="dateOfRequirement"
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.dateOfRequirement && (
                      <span className="text-red-500 text-sm mt-1">{(errors as any).dateOfRequirement?.message}</span>
                    )}
                  </div>

                  {/* Event */}
                  <div className="mb-4">
                    <label htmlFor="event" className="block text-blue-800 font-medium mb-2">
                      Event Type *
                    </label>
                    <input
                      {...register('event')}
                      type="text"
                      id="event"
                      placeholder="e.g., Birthday, Wedding, Corporate Event"
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label htmlFor="flavorInstructions" className="block text-blue-800 font-medium mb-2">
                      Choose Flavor / Instructions *
                    </label>
                    <input
                      {...register('flavorInstructions')}
                      type="text"
                      id="flavorInstructions"
                      placeholder="e.g., Chocolate, Vanilla, Strawberry"
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Reference Image */}
                  <div>
                    <label htmlFor="referenceImage" className="block text-blue-800 font-medium mb-2">
                      Reference Image *
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="referenceImage"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Upload a reference image of the cake design you want
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Conditional Fields for Bulk Orders & Other Events */}
            {(connectionType === 'Bulk Orders' || connectionType === 'Other Events') && (
              <div>
                <label htmlFor="requirements" className="block text-blue-800 font-medium mb-2">
                  Your Requirements *
                </label>
                <textarea
                  {...register('requirements')}
                  id="requirements"
                  placeholder="Please describe your requirements in detail..."
                  rows={6}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !connectionType || !isValid}
              className={`w-full font-medium py-3 px-6 rounded-lg transition duration-300 ${
                isSubmitting || !connectionType || !isValid
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-[#CBEBF2] hover:bg-blue-400 text-blue-900'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            We'll review your inquiry and get back to you within 24-48 hours.
          </p>
        </div>
      </div>
    </section>
  )
}