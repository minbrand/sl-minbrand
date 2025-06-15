import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, MessageSquare, TrendingUp, Target, Users } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "5583994066143";
  const whatsappMessage = "Olá! Quero saber mais sobre seus serviços de marketing.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,87,34,0.1),transparent)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Transforme Seu Negócio em Uma{' '}
              <span className="gradient-text">Máquina de Crescimento</span>{' '}
              com Estratégias de Marketing Agressivo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Sem agência, sem enrolação. Eu assumo o marketing do seu negócio como se fosse meu — com foco total em resultado.
            </p>
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Quero Crescer Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Está Cansado das <span className="gradient-text">Promessas Vazias</span> das Agências?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-4xl mb-4">😤</div>
                <p className="text-lg text-gray-700">Já investiu em marketing e não viu retorno?</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-4xl mb-4">😔</div>
                <p className="text-lg text-gray-700">Se sente sozinho nas decisões?</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-4xl mb-4">🤔</div>
                <p className="text-lg text-gray-700">Precisa crescer, mas não sabe por onde começar?</p>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <p className="text-2xl font-semibold text-orange-800">
                Você não precisa de uma agência, você precisa de alguém que jogue no seu time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              O Que Eu <span className="gradient-text">Faço Por Você</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Assumo seu marketing como se fosse meu</h3>
                  <p className="text-gray-600">Trabalho com dedicação total ao seu projeto, como se fosse meu próprio negócio.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Executo estratégias com foco em ROI</h3>
                  <p className="text-gray-600">Cada ação tem objetivo claro: gerar mais vendas e receita para seu negócio.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analiso dados e escalo o que funciona</h3>
                  <p className="text-gray-600">Testo, meço, otimizo e multiplico apenas as estratégias que trazem resultado.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-full">
                  <ArrowRight className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foco total em vendas e crescimento real</h3>
                  <p className="text-gray-600">Sem métricas de vaidade. O que importa é faturamento e crescimento sustentável.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Quem <span className="gradient-text">Sou Eu?</span>
            </h2>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Me chamo <strong>Jonathan Amorim</strong>, mais conhecido como <strong>Jota</strong>, com 15 anos de experiência em marketing digital, 
                ajudando empresas a faturarem milhões. Conheço o que funciona — e o que não.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                De tráfego pago a branding, de inbound a outbound, minha missão é uma só: 
                <strong className="text-orange-600"> fazer você crescer.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Planos de <span className="gradient-text">Investimento</span>
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                Trabalho com investimentos <strong className="text-orange-600">a partir de R$ 2.000 mensais </strong> 
                pela prestação de serviço completo de marketing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Este investimento garante dedicação total ao seu projeto, com estratégias 
                personalizadas e foco exclusivo no crescimento do seu negócio.
              </p>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Conhecer os Planos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Por Que Eu e <span className="gradient-text">Não Uma Agência?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Agência Tradicional</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Você é só mais um cliente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Processos lentos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">Foco em relatórios</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Comigo</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Seu marketing é tratado como prioridade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Agilidade e execução direta</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Foco em vendas e resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Vamos <span className="text-orange-100">Crescer Juntos</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Trabalho com poucos clientes por vez para garantir alta performance. 
              Se você quer crescer, chegou a hora de agir.
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Quero Falar com Você
              <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Vamos conversar. Me conte um pouco sobre seu negócio e vamos descobrir se posso te ajudar.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-4">Email</h3>
                <p className="text-gray-600">minbrandmedia@gmail.com</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-4">WhatsApp</h3>
                <p className="text-gray-600">(83) 9 9406-6143</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 MinBrand – Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
