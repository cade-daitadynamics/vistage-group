export interface Member {
  name: string;
  title: string;
  company: string;
  company_url: string;
  linkedin_url: string;
  headshot_url: string;
  tagline: string;
  what_we_do: string;
  who_we_help: string;
  key_services: string[];
  differentiator: string;
  notable_results: string | string[];
  notable_results_intro?: string;
  cta_text: string;
  cta_link: string;
}
