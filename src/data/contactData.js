export const contactData = {
  heading: 'Kontakt aufnehmen',
  subheading: 'Lassen Sie uns Ihr nächstes Fundament-Engineering-Projekt besprechen',
  contactInfoHeading: 'Kontaktinformationen',
  labels: {
    address: 'Adresse',
    phone: 'Telefon',
    email: 'E-Mail',
  },
  successMessage: 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
  submitButton: 'Nachricht senden',
};

export const contactInfo = {
  email: 'info@papage.ch',
  phone: '+41 79 656 56 21',
  address: 'Steinackerweg 9, 8405 Winterthur',
  coordinates: {
    lat: 47.5034,
    lng: 8.7249,
  },
};

export const formFields = [
  {
    id: 'name',
    label: 'Vollständiger Name',
    type: 'text',
    placeholder: 'Max Mustermann',
    required: true,
  },
  {
    id: 'email',
    label: 'E-Mail',
    type: 'email',
    placeholder: 'max@beispiel.com',
    required: true,
  },
  {
    id: 'phone',
    label: 'Telefon',
    type: 'tel',
    placeholder: '+41 123 456 7890',
    required: false,
  },
  {
    id: 'subject',
    label: 'Betreff',
    type: 'text',
    placeholder: 'Projektanfrage',
    required: true,
  },
  {
    id: 'message',
    label: 'Nachricht',
    type: 'textarea',
    placeholder: 'Erzählen Sie uns von Ihrem Projekt...',
    required: true,
    rows: 5,
  },
];
