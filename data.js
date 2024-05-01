const Country = [
    { value: '', label: 'All region', icon: '/country/glob.svg' },
    { value: 'xa-en', label: 'Arabia (en)', icon: '/country/sa.svg' },
    { value: 'ar-es', label: 'Argentina', icon: 'ar-flag-icon.png' },
    { value: 'au-en', label: 'Australia', icon: 'au-flag-icon.png' },
    { value: 'at-de', label: 'Austria', icon: 'at-flag-icon.png' },
    { value: 'be-fr', label: 'Belgium (fr)', icon: 'be-flag-icon.png' },
    { value: 'be-nl', label: 'Belgium (nl)', icon: 'be-flag-icon.png' },
    { value: 'br-pt', label: 'Brazil', icon: 'br-flag-icon.png' },
    { value: 'bg-bg', label: 'Bulgaria', icon: 'bg-flag-icon.png' },
    { value: 'ca-en', label: 'Canada', icon: 'ca-flag-icon.png' },
    { value: 'ca-fr', label: 'Canada (fr)', icon: 'ca-flag-icon.png' },
    { value: 'ct-ca', label: 'Catalan', icon: 'ct-flag-icon.png' },
    { value: 'cl-es', label: 'Chile', icon: 'cl-flag-icon.png' },
    { value: 'cn-zh', label: 'China', icon: 'cn-flag-icon.png' },
    { value: 'co-es', label: 'Colombia', icon: 'co-flag-icon.png' },
    { value: 'hr-hr', label: 'Croatia', icon: 'hr-flag-icon.png' },
    { value: 'cz-cs', label: 'Czech Republic', icon: 'cz-flag-icon.png' },
    { value: 'dk-da', label: 'Denmark', icon: 'dk-flag-icon.png' },
    { value: 'ee-et', label: 'Estonia', icon: 'ee-flag-icon.png' },
    { value: 'fi-fi', label: 'Finland', icon: 'fi-flag-icon.png' },
    { value: 'fr-fr', label: 'France', icon: 'fr-flag-icon.png' },
    { value: 'de-de', label: 'Germany', icon: 'de-flag-icon.png' },
    { value: 'gr-el', label: 'Greece', icon: 'gr-flag-icon.png' },
    { value: 'hk-tzh', label: 'Hong Kong', icon: 'hk-flag-icon.png' },
    { value: 'hu-hu', label: 'Hungary', icon: 'hu-flag-icon.png' },
    { value: 'in-en', label: 'India', icon: 'in-flag-icon.png' },
    { value: 'id-id', label: 'Indonesia', icon: 'id-flag-icon.png' },
    { value: 'id-en', label: 'Indonesia (en)', icon: 'id-flag-icon.png' },
    { value: 'ie-en', label: 'Ireland', icon: 'ie-flag-icon.png' },
    { value: 'il-he', label: 'Israel', icon: 'il-flag-icon.png' },
    { value: 'it-it', label: 'Italy', icon: 'it-flag-icon.png' },
    { value: 'jp-jp', label: 'Japan', icon: 'jp-flag-icon.png' },
    { value: 'kr-kr', label: 'Korea', icon: 'kr-flag-icon.png' },
    { value: 'lv-lv', label: 'Latvia', icon: 'lv-flag-icon.png' },
    { value: 'lt-lt', label: 'Lithuania', icon: 'lt-flag-icon.png' },
    { value: 'xl-es', label: 'Latin America', icon: 'xl-flag-icon.png' },
    { value: 'my-ms', label: 'Malaysia', icon: 'my-flag-icon.png' },
    { value: 'my-en', label: 'Malaysia (en)', icon: 'my-flag-icon.png' },
    { value: 'mx-es', label: 'Mexico', icon: 'mx-flag-icon.png' },
    { value: 'nl-nl', label: 'Netherlands', icon: 'nl-flag-icon.png' },
    { value: 'nz-en', label: 'New Zealand', icon: 'nz-flag-icon.png' },
    { value: 'no-no', label: 'Norway', icon: 'no-flag-icon.png' },
    { value: 'pe-es', label: 'Peru', icon: 'pe-flag-icon.png' },
    { value: 'ph-en', label: 'Philippines', icon: 'ph-flag-icon.png' },
    { value: 'ph-tl', label: 'Philippines (tl)', icon: 'ph-flag-icon.png' },
    { value: 'pl-pl', label: 'Poland', icon: 'pl-flag-icon.png' },
    { value: 'pt-pt', label: 'Portugal', icon: 'pt-flag-icon.png' },
    { value: 'ro-ro', label: 'Romania', icon: 'ro-flag-icon.png' },
    { value: 'ru-ru', label: 'Russia', icon: 'ru-flag-icon.png' },
    { value: 'sg-en', label: 'Singapore', icon: 'sg-flag-icon.png' },
    { value: 'sk-sk', label: 'Slovak Republic', icon: 'sk-flag-icon.png' },
    { value: 'sl-sl', label: 'Slovenia', icon: 'sl-flag-icon.png' },
    { value: 'za-en', label: 'South Africa', icon: 'za-flag-icon.png' },
    { value: 'es-es', label: 'Spain', icon: 'es-flag-icon.png' },
    { value: 'se-sv', label: 'Sweden', icon: 'se-flag-icon.png' },
    { value: 'ch-de', label: 'Switzerland (de)', icon: 'ch-flag-icon.png' },
    { value: 'ch-fr', label: 'Switzerland (fr)', icon: 'ch-flag-icon.png' },
    { value: 'ch-it', label: 'Switzerland (it)', icon: 'ch-flag-icon.png' },
    { value: 'tw-tzh', label: 'Taiwan', icon: 'tw-flag-icon.png' },
    { value: 'th-th', label: 'Thailand', icon: 'th-flag-icon.png' },
    { value: 'tr-tr', label: 'Turkey', icon: 'tr-flag-icon.png' },
    { value: 'ua-uk', label: 'Ukraine', icon: 'ua-flag-icon.png' },
    { value: 'uk-en', label: 'United Kingdom', icon: 'uk-flag-icon.png' },
    { value: 'us-en', label: 'United States', icon: 'us-flag-icon.png' },
    { value: 'ue-es', label: 'United States (es)', icon: 'us-flag-icon.png' },
    { value: 've-es', label: 'Venezuela', icon: 've-flag-icon.png' },
    { value: 'vn-vi', label: 'Vietnam', icon: 'vn-flag-icon.png' },
    { value: 'wt-wt', label: 'No region', icon: 'default-flag-icon.png' },
];


export const Safesearch = [
    { value: 'moderate', label: 'Moderate' },
    { value: 'on', label: 'Strict' },
    { value: 'off', label: 'Off' }
]

export const Searchtime = [
    { value: '', label: 'Any Time' },
    { value: 'd', label: 'Past day' },
    { value: 'w', label: 'Past week' },
    { value: 'm', label: 'Past month' },
    { value: 'y', label: 'Past year' },

]