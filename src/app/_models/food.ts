export interface FoodData {
  status: number;
  product: Product;
  code: string;
  status_verbose: string;
}

interface Product {
  image_ingredients_url: string;
  ingredients_original_tags: string[];
  nutrition_score_debug: string;
  nucleotides_prev_tags: any[];
  additives_debug_tags: any[];
  code: string;
  ingredients_analysis_tags: string[];
  checkers: any[];
  brands_tags: string[];
  nova_groups: string;
  image_ingredients_thumb_url: string;
  image_small_url: string;
  lang_debug_tags: any[];
  nova_group: number;
  sortkey: number;
  serving_size_debug_tags: any[];
  expiration_date_debug_tags: any[];
  link_debug_tags: any[];
  ingredients_that_may_be_from_palm_oil_tags: any[];
  serving_quantity: number;
  emb_codes_orig: string;
  'fruits-vegetables-nuts_100g_estimate': number;
  additives_prev_original_tags: string[];
  image_nutrition_url: string;
  ingredients_text_en_debug_tags: any[];
  quantity: string;
  languages_hierarchy: string[];
  states: string;
  product_name_en_debug_tags: any[];
  emb_codes_20141016: string;
  purchase_places_debug_tags: any[];
  checkers_tags: any[];
  ingredients_that_may_be_from_palm_oil_n: number;
  product_name: string;
  traces_tags: string[];
  quantity_debug_tags: any[];
  additives_tags: string[];
  manufacturing_places: string;
  max_imgid: string;
  stores: string;
  origins: string;
  stores_debug_tags: any[];
  image_thumb_url: string;
  traces_debug_tags: any[];
  data_quality_warnings_tags: any[];
  nutrition_data_prepared_per_debug_tags: any[];
  ingredients_n: number;
  interface_version_created: string;
  last_modified_by: string;
  nutriscore_grade: string;
  complete: number;
  ingredients_hierarchy: string[];
  ingredients: Ingredient[];
  codes_tags: string[];
  labels_hierarchy: string[];
  correctors: string[];
  minerals_prev_tags: any[];
  scans_n: number;
  labels_prev_hierarchy: string[];
  ingredients_tags: string[];
  vitamins_prev_tags: any[];
  amino_acids_tags: any[];
  brands_debug_tags: any[];
  image_front_thumb_url: string;
  countries_debug_tags: any[];
  nutrient_levels_tags: string[];
  traces_from_ingredients: string;
  data_quality_tags: string[];
  ingredients_from_palm_oil_tags: any[];
  other_nutritional_substances_tags: any[];
  informers_tags: string[];
  lang: string;
  categories_lc: string;
  purchase_places: string;
  ingredients_from_palm_oil_n: number;
  nutriments: Nutriments;
  countries: string;
  ingredients_text_with_allergens: string;
  countries_tags: string[];
  unknown_ingredients_n: number;
  sources: Source[];
  unique_scans_n: number;
  categories_tags: string[];
  expiration_date: string;
  rev: number;
  traces_hierarchy: string[];
  manufacturing_places_tags: any[];
  pnns_groups_2: string;
  ingredients_text: string;
  editors: string[];
  nutrition_grades_tags: string[];
  nutrition_data_per: string;
  states_tags: string[];
  minerals_tags: any[];
  _keywords: string[];
  misc_tags: string[];
  additives_old_n: number;
  packaging: string;
  image_ingredients_small_url: string;
  categories: string;
  nucleotides_tags: any[];
  ingredients_text_debug: string;
  unknown_nutrients_tags: any[];
  allergens_from_ingredients: string;
  image_nutrition_small_url: string;
  interface_version_modified: string;
  cities_tags: any[];
  serving_size: string;
  emb_codes_tags: any[];
  image_url: string;
  last_editor: string;
  nutrition_score_warning_no_fruits_vegetables_nuts: number;
  allergens: string;
  allergens_tags: string[];
  pnns_groups_2_tags: string[];
  entry_dates_tags: string[];
  packaging_debug_tags: any[];
  languages_codes: Languagescodes;
  emb_codes_debug_tags: any[];
  nutrition_score_beverage: number;
  origins_tags: string[];
  creator: string;
  nutrition_data_per_debug_tags: any[];
  completeness: number;
  last_image_dates_tags: string[];
  created_t: number;
  labels_prev_tags: string[];
  new_additives_n: number;
  manufacturing_places_debug_tags: any[];
  informers: string[];
  packaging_tags: string[];
  ingredients_n_tags: string[];
  categories_hierarchy: string[];
  image_front_small_url: string;
  data_quality_bugs_tags: any[];
  additives_n: number;
  generic_name_en: string;
  product_quantity: number;
  nova_group_debug: string;
  completed_t: number;
  nutrition_data: string;
  ingredients_ids_debug: string[];
  nutriscore_score: number;
  selected_images: Selectedimages;
  labels_tags: string[];
  no_nutrition_data: string;
  generic_name_en_debug_tags: any[];
  _id: string;
  origins_debug_tags: any[];
  correctors_tags: string[];
  data_quality_info_tags: string[];
  images: Images;
  nova_groups_tags: string[];
  emb_codes: string;
  popularity_tags: string[];
  traces: string;
  link: string;
  debug_param_sorted_langs: string[];
  vitamins_tags: any[];
  update_key: string;
  nutrition_grade_fr: string;
  additives_tags_n?: any;
  image_nutrition_thumb_url: string;
  nutrition_grades: string;
  ingredients_debug: (null | string)[];
  editors_tags: string[];
  countries_lc: string;
  image_front_url: string;
  languages: Languages;
  nutrition_data_prepared: string;
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  additives_old_tags: string[];
  purchase_places_tags: any[];
  pnns_groups_1_tags: string[];
  nutriscore_data: Nutriscoredata;
  data_quality_errors_tags: any[];
  additives_original_tags: string[];
  nutrition_data_prepared_per: string;
  id: string;
  pnns_groups_1: string;
  photographers: string[];
  photographers_tags: string[];
  allergens_hierarchy: string[];
  last_modified_t: number;
  ingredients_text_with_allergens_en: string;
  generic_name: string;
  amino_acids_prev_tags: any[];
  ingredients_text_en: string;
  last_image_t: number;
  languages_tags: string[];
  nutrient_levels: Nutrientlevels;
  lc: string;
  labels: string;
  brands: string;
  states_hierarchy: string[];
  countries_hierarchy: string[];
  product_name_en: string;
  labels_lc: string;
  last_edit_dates_tags: string[];
  stores_tags: any[];
}

interface Nutrientlevels {
  fat: string;
  salt: string;
  sugars: string;
  'saturated-fat': string;
}

interface Nutriscoredata {
  proteins_value: number;
  energy_value: number;
  saturated_fat_value: number;
  fiber_points: number;
  grade: string;
  sugars_value: number;
  is_water: number;
  sugars_points: number;
  is_fat: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  is_beverage: number;
  sugars: number;
  proteins_points: number;
  score: number;
  sodium_points: number;
  energy_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  proteins: number;
  energy: number;
  negative_points: number;
  is_cheese: number;
  saturated_fat_ratio: number;
  sodium: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  positive_points: number;
  saturated_fat_ratio_value: number;
  sodium_value: number;
  saturated_fat_ratio_points: number;
  fiber: number;
  saturated_fat: number;
  saturated_fat_points: number;
}

interface Languages {
  'en:english': number;
}

interface Images {
  '1': _1;
  '2': _1;
  '3': _1;
  '4': _1;
  '5': _1;
  nutrition_en: Nutritionen;
  nutrition: Nutritionen;
  ingredients: Nutritionen;
  front: Front2;
  front_en: Front2;
  ingredients_en: Nutritionen;
}

interface Front2 {
  rev: string;
  normalize?: any;
  white_magic?: any;
  imgid: string;
  geometry: string;
  sizes: Sizes2;
}

interface Nutritionen {
  rev: string;
  normalize: string;
  white_magic?: any;
  imgid: string;
  sizes: Sizes2;
  geometry: string;
}

interface Sizes2 {
  '100': _100;
  '200': _100;
  '400': _100;
  full: _100;
}

interface _1 {
  uploader: string;
  sizes: Sizes;
  uploaded_t: number;
}

interface Sizes {
  '100': _100;
  '400': _100;
  full: _100;
}

interface _100 {
  h: number;
  w: number;
}

interface Selectedimages {
  front: Front;
  nutrition: Front;
  ingredients: Front;
}

interface Front {
  thumb: Thumb;
  small: Thumb;
  display: Thumb;
}

interface Thumb {
  en: string;
}

interface Languagescodes {
  en: number;
}

interface Source {
  import_t: number;
  fields: string[];
  id: string;
  url: string;
  images: any[];
}

interface Nutriments {
  fat_unit: string;
  sodium: number;
  fiber_value: number;
  'saturated-fat_serving': number;
  salt_serving: number;
  carbohydrates_unit: string;
  'nutrition-score-uk_100g': number;
  energy: number;
  'nova-group_serving': number;
  proteins: number;
  fiber_serving: number;
  proteins_serving: number;
  sugars_100g: number;
  salt: number;
  'nutrition-score-fr': number;
  fat_value: number;
  carbohydrates_100g: number;
  fat: number;
  'nutrition-score-fr_100g': number;
  salt_unit: string;
  sodium_value: number;
  'nutrition-score-uk': number;
  'saturated-fat_100g': number;
  fiber_unit: string;
  carbohydrates_value: number;
  fiber: number;
  energy_unit: string;
  'energy-kcal_value': number;
  sodium_100g: number;
  proteins_100g: number;
  fat_serving: number;
  energy_value: number;
  proteins_unit: string;
  proteins_value: number;
  energy_100g: number;
  energy_serving: number;
  sugars_value: number;
  'nova-group_100g': number;
  'energy-kcal_unit': string;
  fiber_100g: number;
  sugars_serving: number;
  carbohydrates_serving: number;
  'nova-group': number;
  'saturated-fat': number;
  'saturated-fat_unit': string;
  sodium_serving: number;
  'saturated-fat_value': number;
  salt_value: number;
  'energy-kcal': number;
  sugars: number;
  'energy-kcal_100g': number;
  fat_100g: number;
  sodium_unit: string;
  'energy-kcal_serving': number;
  carbohydrates: number;
  salt_100g: number;
  sugars_unit: string;
}

interface Ingredient {
  id: string;
  has_sub_ingredients?: string;
  rank?: number;
  text: string;
  vegan?: string;
  vegetarian?: string;
  origin?: string;
  from_palm_oil?: string;
}