import {
  Menu,
  Category,
  BrandIndices,
  Brand,
} from './types';


const transformLevelThreeCategories = (levelThreeCategories: any[]): Category[] => {
  const transformedCategories: Category[] = [];

  if (levelThreeCategories && Array.isArray(levelThreeCategories)) {
    levelThreeCategories.forEach((levelThreeCategory) => {
      const {
        category_id: categoryId,
        parent_id: parentId,
        name,
        position,
        // depth: "0"
        // catalog_tag: "nykaa"
        request_path: requestPath,
      } = levelThreeCategory;

      transformedCategories.push({
        name,
        categoryId,
        parentId,
        position,
        requestPath,
        level: 3,
        children: [],
      });
    });
  }

  return transformedCategories;
};

const transformLevelTwoCategories = (levelTwoCategories: any[]): Category[] => {
  const transformedCategories: Category[] = [];

  if (levelTwoCategories && Array.isArray(levelTwoCategories)) {
    levelTwoCategories.forEach((levelTwoCategory) => {
      const {
        category_id: categoryId,
        parent_id: parentId,
        name,
        position,
        // depth: "0"
        // catalog_tag: "nykaa"
        request_path: requestPath,
      } = levelTwoCategory;

      transformedCategories.push({
        name,
        categoryId,
        parentId,
        position,
        requestPath,
        level: 2,
        children: transformLevelThreeCategories(levelTwoCategory.l3Categories),
      });
    });
  }


  return transformedCategories;
};

const transformCategories = (data: any) : Category[] => {
  const transformedCategories: Category[] = [];
  const { l1Categories } = data;

  const NavKeys = Object.keys(l1Categories || {});

  NavKeys.forEach((NavKey) => {
    const l1Category = l1Categories[NavKey];

    transformedCategories.push({
      name: l1Category.name,
      categoryId: l1Category.category_id,
      parentId: l1Category.parent_id,
      position: l1Category.position,
      requestPath: l1Category.request_path,
      level: 1,
      children: transformLevelTwoCategories(l1Category.l2Categories),
    });
  });

  return transformedCategories;
};

const transformBrands = (data: any): BrandIndices => {
  if (!data || (typeof data !== 'object')) {
    return {};
  }

  const transformedBrandIndices: BrandIndices = {};
  const brandIndices = Object.keys(data);

  brandIndices.forEach((brandIndex) => {
    const brands: any = data[brandIndex] || [];
    if (Array.isArray(brands)) {
      const transformedBrands: Brand[] = brands.map((brand: any) => ({
        name: brand.name,
        brandId: brand.brand_id,
        requestPath: brand.request_path,
      }));

      transformedBrandIndices[brandIndex] = transformedBrands;
    }
  });

  return transformedBrandIndices;
};

export const transformNavigation = (data: any): Menu => {
  const { categories, brands } = data;

  const transformedCategories = transformCategories(categories);

  return {
    categories: transformedCategories,
    brands: transformBrands(brands),
  };
};

export const dummy = 0;
