// app/components/ContactForm.tsx
"use client";

import { useForm } from "react-hook-form"; //لتسهيل إدارة النموذج
import { zodResolver } from "@hookform/resolvers/zod"; //للتحقق من صحة البيانات
import { z } from "zod"; // لتعريف مخططات التحقق.
import toast from "react-hot-toast";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// 1. تعريف مخطط التحقق (Schema) باستخدام Zod
const contactSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  email: z.string().email({ message: "الرجاء إدخال بريد إلكتروني صحيح" }),
  message: z
    .string()
    .min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }),
});

// استنتاج النوع من مخطط Zod
type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  // 2. دالة لمعالجة إرسال النموذج
  const processForm = async (data: ContactFormInputs) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("فشل إرسال الرسالة. حاول مرة أخرى.");
      }

      toast.success("تم إرسال رسالتك بنجاح!");
      reset(); // إعادة تعيين حقول النموذج بعد الإرسال الناجح
    } catch (error) {
      const err = error as Error;
      toast.error(err.message || "حدث خطأ غير متوقع.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // 3. بناء واجهة النموذج (JSX)
    <form
      onSubmit={handleSubmit(processForm)}
      className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        تواصل معنا
      </h2>

      {/* حقل الاسم */}
      <div className="mb-5">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          الاسم
        </label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* حقل البريد الإلكتروني */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          البريد الإلكتروني
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* حقل الرسالة */}
      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-gray-700 font-medium mb-2"
        >
          رسالتك
        </label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* زر الإرسال */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
      >
        {isLoading ? "جاري الإرسال..." : "إرسال الرسالة"}
      </Button>
    </form>
  );
}
