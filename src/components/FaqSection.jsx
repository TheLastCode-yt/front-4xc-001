'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slideUp } from '@/animations/slideVariants';
import Accordion from './Accordion';
const FaqSection = () => {
  const faqData = [
    {
      question: 'Como abro uma conta de negociação ao vivo?',
      link: '/',
    },
    {
      question: 'Quais documentos você precisa?',
      link: '/',
    },
    {
      question: 'Como posso verificar meu perfil?',
      link: '/',
    },
    {
      question: 'Posso abrir mais de uma conta com a Trader 4xc?',
      link: '/',
    },
    {
      question: 'Em quais moedas base posso abrir uma conta?',
      link: '/',
    },
    {
      question: 'Quais tipos de conta você oferece?',
      link: '/',
    },
  ];

  const data = [
    {
      question: 'Como abro uma conta de negociação ao vivo?',
      answer:
        'Você pode abrir uma conta de negociação ao vivo diretamente em nosso site, preenchendo o formulário de inscrição.',
    },
    {
      question: 'Quais documentos você precisa?',
      answer:
        'Para abrir uma conta, precisamos de uma prova de identidade e um comprovante de endereço.',
    },
    {
      question: 'Como posso verificar meu perfil?',
      answer:
        'Você pode verificar seu perfil enviando os documentos exigidos através de nossa plataforma de verificação.',
    },
    {
      question: 'Posso abrir mais de uma conta com a Trader 4xc?',
      answer:
        'Sim, você pode abrir várias contas, cada uma com uma moeda base diferente.',
    },
    {
      question: 'Em quais moedas base posso abrir uma conta?',
      answer: 'Atualmente, oferecemos contas em USD, EUR, e GBP.',
    },
    {
      question: 'Quais tipos de conta você oferece?',
      answer:
        'Oferecemos contas Standard, Pro e VIP, cada uma com características e benefícios específicos.',
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 items-center justify-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-[#2d3436] text-4xl"
          >
            Perguntas frequentes
          </motion.h2>

          <div className="w-full grid grid-cols-6 gap-6 xl:gap-10">
            {data.map((item, index) => (
              <Accordion
                key={index}
                answer={item.answer}
                question={item.question}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
