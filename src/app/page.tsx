import ContactForm from "@/components/ContactForm";
import { Rocket, ShieldCheck, Smartphone } from "lucide-react";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center text-center text-white"
      >
        {/* صورة الخلفية مع طبقة داكنة */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <img
          src="/hero-background.jpeg"
          alt="Modern workspace"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />

        {/* المحتوى */}
        <div className="z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            بناء تطبيقات ويب حديثة وسريعة
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            متخصص في تحويل أفكارك إلى واقع رقمي باستخدام Next.js و React.
          </p>
          <a href="#contact">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105">
              تواصل معي
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">لماذا تختار العمل معي؟</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            أقدم حلولاً متكاملة تركز على الجودة والأداء وتجربة المستخدم.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* الميزة 1 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <Rocket className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">أداء فائق</h3>
              <p className="text-gray-600">
                بناء تطبيقات سريعة باستخدام Next.js لضمان أفضل تجربة للمستخدم.
              </p>
            </div>
            {/* الميزة 2 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <Smartphone className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">تصميم متجاوب</h3>
              <p className="text-gray-600">
                تصاميم عصرية تعمل بشكل مثالي على جميع الأجهزة والشاشات.
              </p>
            </div>
            {/* الميزة 3 */}
            <div className="p-6 border rounded-lg shadow-sm">
              <ShieldCheck className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">كود آمن ونظيف</h3>
              <p className="text-gray-600">
                أتبع أفضل الممارسات لكتابة كود قابل للصيانة والتطوير مستقبلًا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section - تصميم محسّن */}
      <section
        dir="rtl"
        id="about"
        className="w-full py-24 bg-gray-50 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              نبذة عني
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              مزيج من الشغف التقني والإبداع في التصميم.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="relative flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* قسم النص */}
              <div className="w-full md:w-4/5 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  مصطفى خليل
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  مطور ويب شغوف، أستمتع بتحويل الأفكار المعقدة إلى تطبيقات بسيطة
                  وجميلة. لدي خبرة في بناء تطبيقات الويب من الواجهة الأمامية إلى
                  الخلفية باستخدام React و Next.js.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  أبحث دائمًا عن تعلم تقنيات جديدة وتحديات مثيرة للمساهمة في
                  بناء ويب أفضل، مع التركيز على كتابة كود نظيف وقابل للتطوير.
                </p>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    لنتحدث عن مشروعك
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
