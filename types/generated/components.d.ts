import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_details';
  info: {
    displayName: 'Detail';
  };
  attributes: {
    composition_lining: Schema.Attribute.String;
    composition_outer: Schema.Attribute.String;
    highlights: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    washing_instructions: Schema.Attribute.String;
    wearing_info: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_shared_portfolios';
  info: {
    displayName: 'portfolio';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    projectName: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedProductColor extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_colors';
  info: {
    displayName: 'productColor';
  };
  attributes: {
    hexCode: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'skill';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.detail': SharedDetail;
      'shared.media': SharedMedia;
      'shared.portfolio': SharedPortfolio;
      'shared.product-color': SharedProductColor;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.skill': SharedSkill;
      'shared.slider': SharedSlider;
    }
  }
}
