// Careers data comes from the Orbit backend; openings and the application form
// are managed in the admin panel (Hiring).
import { API_BASE_URL as API_URL } from './apiBase';
const CAREERS_API = `${API_URL}/api/careers`;

export interface Position {
  slug: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  type: string;
  team: string;
  skills: string[];
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatYouLearn: string[];
}

export type FieldType = 'text' | 'email' | 'tel' | 'url' | 'number' | 'textarea' | 'select';

export interface FormField {
  id: string;
  key: string;
  label: string;
  type: FieldType;
  placeholder: string | null;
  helpText: string | null;
  required: boolean;
  options: string[];
}

export interface ResumeRules {
  maxBytes: number;
  accept: string[];
}

interface ApiOpening {
  slug: string;
  title: string;
  team: string | null;
  category: string | null;
  location: string | null;
  duration: string | null;
  employmentType: string | null;
  skills: string[];
  summary: string | null;
  about: string | null;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatYouLearn: string[];
}

export class CareersError extends Error {
  status?: number;
  fieldErrors?: Record<string, string>;
  constructor(message: string, status?: number, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = 'CareersError';
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

const toPosition = (o: ApiOpening): Position => ({
  slug: o.slug,
  title: o.title,
  category: o.category || '',
  location: o.location || '',
  duration: o.duration || '',
  type: o.employmentType || '',
  team: o.team || '',
  skills: o.skills || [],
  summary: o.summary || '',
  about: o.about || '',
  responsibilities: o.responsibilities || [],
  requirements: o.requirements || [],
  niceToHave: o.niceToHave || [],
  whatYouLearn: o.whatYouLearn || [],
});

async function getJson<T>(url: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch {
    throw new CareersError("We couldn't reach our servers. Check your connection and try again.");
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new CareersError(body?.message || 'Something went wrong. Please try again.', res.status, body?.fieldErrors);
  return body as T;
}

export async function fetchPositions(init?: RequestInit): Promise<Position[]> {
  const { data } = await getJson<{ data: ApiOpening[] }>(`${CAREERS_API}/openings`, init);
  return data.map(toPosition);
}

export async function fetchPosition(slug: string): Promise<{ position: Position; fields: FormField[]; resume: ResumeRules }> {
  const { data } = await getJson<{ data: { opening: ApiOpening; fields: FormField[]; resume: ResumeRules } }>(
    `${CAREERS_API}/openings/${encodeURIComponent(slug)}`,
  );
  return { position: toPosition(data.opening), fields: data.fields, resume: data.resume };
}

/** Send an application (multipart: answers + resume file). Throws CareersError with fieldErrors. */
export async function submitApplication(form: FormData): Promise<void> {
  await getJson(`${CAREERS_API}/apply`, { method: 'POST', body: form });
}
