/** 0 = domingo … 6 = sábado. Horas decimais: 18.5 = 18h30. null = fechado. */
export type Horarios = Record<number, [abre: number, fecha: number] | null>;

export interface Negocio {
  slug: string;
  nome: string;
  /** Tipo schema.org: Pharmacy, ExerciseGym, Bakery, Restaurant, PetStore, HairSalon, AutoRepair, Dentist, ClothingStore, LocalBusiness… */
  schemaTipo: string;
  /** URL pública final, sem barra no fim (https://slug.vercel.app ou domínio do cliente). */
  url: string;
  /** true = mostra a faixa de prévia e bloqueia indexação (noindex). Mude para false ao publicar o site oficial. */
  previa: boolean;
  autor: { nome: string; url?: string; whatsapp?: string };

  whatsapp: string; // 55 + DDD + número, só dígitos
  telefone?: { link: string; exibicao: string };
  email?: string;
  endereco: { rua: string; bairro: string; cidade: string; uf: string; cep: string };
  geo?: { lat: number; lng: number };
  fuso: string;
  horarios: Horarios;
  obsHorario?: string;

  seo: {
    titulo: string; // até ~60 caracteres: "Negócio · o que é em Cidade"
    descricao: string; // 120–160 caracteres, com cidade e serviço principal
    ogTitulo: string;
    ogDescricao: string;
    imagem: string; // caminho em /public, ex.: "/og.jpg"
  };
  fundacao?: string;
  redes?: { instagram?: string; facebook?: string; google?: string };
  avaliacao?: { nota: number; total: number; fonte: string };
  faq: { p: string; r: string }[];
  /** Campos extras específicos do schema (servesCuisine, amenityFeature, priceRange…). */
  schemaExtra?: Record<string, unknown>;
}
