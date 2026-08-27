'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'

const inquirySchema = z.object({
  fullName: z.string().min(2,'Required'),
  email: z.string().email('Invalid email'),
  city: z.string().min(2,'Required'),
  mobileNumber: z.string().regex(/^[0-9]{10}$/,'Must be 10 digits'),
  requirements: z.string().min(5,'Required'),
  connectionType: z.enum(['Corporate/ Festive gifting','Customized cakes','Wedding','Other events'])
})

type InquiryFormData = z.infer<typeof inquirySchema>

export function BusinessInquiry() {
  const [isSubmitting,setIsSubmitting]=useState(false)
  const [submitStatus,setSubmitStatus]=useState<'success'|'error'|null>(null)
  const [submitMessage,setSubmitMessage]=useState('')
  const {register,handleSubmit,watch,reset,formState:{errors,isValid}}=useForm<InquiryFormData>({
    resolver:zodResolver(inquirySchema),
    mode:'onChange'
  })
  const connectionType=watch('connectionType')
  const onSubmit=async(data:InquiryFormData)=>{
    setIsSubmitting(true)
    try{
      const res=await fetch('/api/send-inquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
      if(res.ok){setSubmitStatus('success');setSubmitMessage('Inquiry sent successfully.');reset()}
      else{setSubmitStatus('error');setSubmitMessage('Submission failed.')}
    }catch{setSubmitStatus('error');setSubmitMessage('An error occurred.')}
    finally{setIsSubmitting(false)}
  }
  return (
  <div className="w-full flex justify-center bg-gray-50 rounded-3xl shadow-2xl">
    <div className="w-full max-w-5xl bg-white rounded-lg p-2">
      <div className="bg-[#F5D1D8] px-5 py-3 flex items-center gap-2 rounded-t-lg">
        <MailOutlineOutlinedIcon className="!text-black-600"/>
        <div><h3 className="font-semibold">Contact Form</h3><p className="text-xs opacity-75">Fill out the details</p></div>
      </div> 
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
      {
        submitStatus&&<div className={submitStatus==='success'?'p-2 bg-green-50 text-green-700':'p-2 bg-red-50 text-red-700'}>{submitMessage}</div>
      }
      <div className="grid sm:grid-cols-2 gap-6">
      <div><label className="flex items-center gap-2 text-xs"><PersonOutlineOutlinedIcon className="!text-black !text-[18px]"/>Full Name *</label>
      <input {...register('fullName')} className="w-full border-b outline-none"/>{errors.fullName&&<p className="text-red-500 text-xs">{errors.fullName.message}</p>}</div>
       <div><label className="flex items-center gap-2 text-xs"><EmailOutlinedIcon className="!text-black !text-[18px]"/>Email *</label>
       <input {...register('email')} className="w-full border-b outline-none"/>{errors.email&&<p className="text-red-500 text-xs">{errors.email.message}</p>}</div>
       <div><label className="flex items-center gap-2 text-xs"><PhoneOutlinedIcon className="!text-black !text-[18px]"/>Phone *</label>
       <input {...register('mobileNumber')} className="w-full border-b outline-none"/>{errors.mobileNumber&&<p className="text-red-500 text-xs">{errors.mobileNumber.message}</p>}</div>
       <div><label className="flex items-center gap-2 text-xs"><PlaceOutlinedIcon className="!text-black !text-[18px]"/>City *</label>
       <input {...register('city')} className="w-full border-b outline-none"/>{errors.city&&<p className="text-red-500 text-xs">{errors.city.message}</p>}</div>
       </div>
       <div><label className="flex items-center gap-2 text-xs"><DescriptionOutlinedIcon className="!text-black !text-[18px]"/>Requirements *</label>
      <textarea {...register('requirements')} className="w-full border-b outline-none"/>{errors.requirements&&<p className="text-red-500 text-xs">{errors.requirements.message}</p>}</div>
      <div><label className="flex items-center gap-2 text-s">Which team would you like to connect to?*</label></div>
      <div className="grid sm:grid-cols-2 gap-2">{['Corporate/ Festive gifting','Customized cakes','Wedding','Other events'].map(v=><label key={v} className="border p-2 rounded">
        <input type="radio" value={v} {...register('connectionType')}/> {v}</label>)}</div>
      {errors.connectionType&&<p className="text-red-500 text-xs">{errors.connectionType.message}</p>}
      <div className="flex justify-center"><button disabled={isSubmitting||!connectionType||!isValid} className="px-8 py-2 rounded bg-sky-200 disabled:opacity-50">{isSubmitting?'Submitting...':'Submit'}</button></div>
      </form>
    </div>
  </div>)
}