# 🚀 Project Starter – Next.js Landing Page

Boilerplate base para desenvolvimento de landing pages utilizando Next.js, TypeScript e TailwindCSS.

---

## 🎯 Objetivo

Este projeto foi criado para:

- Desenvolver landing pages com alta performance
- Garantir SEO otimizado
- Manter consistência visual
- Evitar código desorganizado
- Facilitar implementação via IA

---

## 🧱 Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui (opcional)
- Lucide Icons
- clsx

---

## 📁 Estrutura de Pastas

src/
app/
layout.tsx
page.tsx
globals.css

components/
ui/ → Componentes base (shadcn)
layout/ → Header, Footer, Container
sections/ → Seções da landing (Hero, CTA, FAQ)
common/ → Componentes reutilizáveis simples

config/
site.ts → Conteúdo configurável

lib/
utils.ts

styles/
tokens.css
animations.css


---

## 🧩 Organização de Seções

Cada bloco da landing deve ser uma seção isolada:

components/sections/
Hero.tsx
Features.tsx
Testimonials.tsx
CTA.tsx
FAQ.tsx


A `page.tsx` deve apenas compor as seções.

---

## 🎨 Design System

Regras obrigatórias:

- Nunca usar valores hardcoded (ex: mt-[37px])
- Usar apenas escala do Tailwind
- Respeitar spacing scale
- Usar tokens definidos
- Componentes devem ser reutilizáveis

---

## 📌 Regras Arquiteturais

- ❌ Não adicionar lógica de negócio em sections
- ❌ Não misturar layout com conteúdo
- ❌ Não criar estilos fora do Tailwind
- ✅ Criar componentes pequenos e isolados
- ✅ Separar conteúdo repetível em `config/site.ts`

---

## 🧠 Convenções

### Naming

- Componentes: PascalCase
- Seções: NomeDescritivo.tsx
- Arquivos utilitários: camelCase

---

## 🔎 SEO

Utilizar metadata no layout ou page:

export const metadata = {
title: "",
description: "",
}

---

## ⚙️ Como iniciar

npm install
npm run dev


---

## 🤖 Diretrizes para IA

- Sempre reutilizar componentes existentes
- Nunca criar nova estrutura de layout sem necessidade
- Respeitar arquitetura definida
- Evitar repetição de código
- Seguir tokens e padrões existentes

---

## 📦 Quando usar este boilerplate

- Landing pages
- Páginas institucionais
- Páginas de marketing
- MVPs simples

---
