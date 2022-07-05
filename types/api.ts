/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/auth/currentUser": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": string;
            "application/json": string;
            "text/json": string;
          };
        };
      };
    };
  };
  "/api/auth/register": {
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["AuthResponseDto"];
            "application/json": components["schemas"]["AuthResponseDto"];
            "text/json": components["schemas"]["AuthResponseDto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["UserRegisterDto"];
          "text/json": components["schemas"]["UserRegisterDto"];
          "application/*+json": components["schemas"]["UserRegisterDto"];
        };
      };
    };
  };
  "/api/auth/login": {
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["AuthResponseDto"];
            "application/json": components["schemas"]["AuthResponseDto"];
            "text/json": components["schemas"]["AuthResponseDto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["UserLoginDto"];
          "text/json": components["schemas"]["UserLoginDto"];
          "application/*+json": components["schemas"]["UserLoginDto"];
        };
      };
    };
  };
  "/api/categories": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["CategoryReadDto"][];
            "application/json": components["schemas"]["CategoryReadDto"][];
            "text/json": components["schemas"]["CategoryReadDto"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["CategoryReadDto"];
            "application/json": components["schemas"]["CategoryReadDto"];
            "text/json": components["schemas"]["CategoryReadDto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["CategoryCreateDto"];
          "text/json": components["schemas"]["CategoryCreateDto"];
          "application/*+json": components["schemas"]["CategoryCreateDto"];
        };
      };
    };
  };
  "/api/categories/{slug}": {
    get: {
      parameters: {
        path: {
          slug: string;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["CategoryDetailDto"];
            "application/json": components["schemas"]["CategoryDetailDto"];
            "text/json": components["schemas"]["CategoryDetailDto"];
          };
        };
      };
    };
  };
  "/api/categories/{id}": {
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["CategoryUpdateDto"];
          "text/json": components["schemas"]["CategoryUpdateDto"];
          "application/*+json": components["schemas"]["CategoryUpdateDto"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
  "/api/products": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["ProductReadDto"][];
            "application/json": components["schemas"]["ProductReadDto"][];
            "text/json": components["schemas"]["ProductReadDto"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["ProductReadDto"];
            "application/json": components["schemas"]["ProductReadDto"];
            "text/json": components["schemas"]["ProductReadDto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["ProductCreateDto"];
          "text/json": components["schemas"]["ProductCreateDto"];
          "application/*+json": components["schemas"]["ProductCreateDto"];
        };
      };
    };
  };
  "/api/products/{slug}": {
    get: {
      parameters: {
        path: {
          slug: string;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["ProductDetailDto"];
            "application/json": components["schemas"]["ProductDetailDto"];
            "text/json": components["schemas"]["ProductDetailDto"];
          };
        };
      };
    };
  };
  "/api/products/{id}": {
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["ProductUpdateDto"];
          "text/json": components["schemas"]["ProductUpdateDto"];
          "application/*+json": components["schemas"]["ProductUpdateDto"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
  "/api/productTypes": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["ProductTypeReadDto"][];
            "application/json": components["schemas"]["ProductTypeReadDto"][];
            "text/json": components["schemas"]["ProductTypeReadDto"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["ProductTypeReadDto"];
            "application/json": components["schemas"]["ProductTypeReadDto"];
            "text/json": components["schemas"]["ProductTypeReadDto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["ProductTypeCreateDto"];
          "text/json": components["schemas"]["ProductTypeCreateDto"];
          "application/*+json": components["schemas"]["ProductTypeCreateDto"];
        };
      };
    };
  };
  "/api/productTypes/{slug}": {
    get: {
      parameters: {
        path: {
          slug: string;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain": components["schemas"]["ProductTypeDetailDto"];
            "application/json": components["schemas"]["ProductTypeDetailDto"];
            "text/json": components["schemas"]["ProductTypeDetailDto"];
          };
        };
      };
    };
  };
  "/api/productTypes/{id}": {
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["ProductTypeUpdateDto"];
          "text/json": components["schemas"]["ProductTypeUpdateDto"];
          "application/*+json": components["schemas"]["ProductTypeUpdateDto"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
}

export interface components {
  schemas: {
    AuthResponseDto: {
      email?: string | null;
      message?: string | null;
      token?: string | null;
    };
    CategoryCreateDto: {
      name: string;
      slug: string;
      description: string;
      imageUrl: string;
    };
    CategoryDetailDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      slug: string;
      description: string;
      imageUrl: string;
      products?: components["schemas"]["ProductReadDto"][] | null;
      productTypes?: components["schemas"]["ProductTypeReadDto"][] | null;
    };
    CategoryReadDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      slug: string;
      description: string;
      imageUrl: string;
    };
    CategoryUpdateDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      slug: string;
      description: string;
      imageUrl: string;
    };
    ProductCreateDto: {
      sku?: string | null;
      slug: string;
      name: string;
      title: string;
      description: string;
      images?: string[] | null;
      /**
       * Format: double
       * @default 0
       */
      price: number;
      /** Format: int32 */
      quantity: number;
      /** @default true */
      isAvailable?: boolean;
      /** Format: int32 */
      productTypeId: number;
      /** Format: int32 */
      categoryId: number;
    };
    ProductDetailDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      title: string;
      slug: string;
      defaultImage: string;
      /** Format: double */
      price: number;
      /** Format: int32 */
      quantity: number;
      isAvailable: boolean;
      productTypeName?: string | null;
      categoryName?: string | null;
      description?: string | null;
      productTypeSlug: string;
      categorySlug: string;
      images: string[];
    };
    ProductReadDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      title: string;
      slug: string;
      defaultImage: string;
      /** Format: double */
      price: number;
      /** Format: int32 */
      quantity: number;
      isAvailable: boolean;
      productTypeName?: string | null;
      categoryName?: string | null;
    };
    ProductTypeCreateDto: {
      name: string;
      slug: string;
      imageUrl: string;
      /** Format: int32 */
      categoryId: number;
    };
    ProductTypeDetailDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      categoryName: string;
      slug: string;
      imageUrl: string;
      categorySlug: string;
      products: components["schemas"]["ProductReadDto"][];
    };
    ProductTypeReadDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      categoryName: string;
      slug: string;
      imageUrl: string;
      categorySlug: string;
    };
    ProductTypeUpdateDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      name: string;
      slug: string;
      imageUrl: string;
      /** Format: int32 */
      categoryId: number;
    };
    ProductUpdateDto: {
      /** Format: int32 */
      id: number;
      /** Format: date-time */
      createdAt: string;
      sku?: string | null;
      slug: string;
      name: string;
      title: string;
      description: string;
      images?: string[] | null;
      /** Format: double */
      price: number;
      /** Format: int32 */
      quantity: number;
      isAvailable: boolean;
      /** Format: int32 */
      productTypeId: number;
      /** Format: int32 */
      categoryId: number;
    };
    UserLoginDto: {
      /** Format: email */
      email: string;
      /** Format: password */
      password: string;
    };
    UserRegisterDto: {
      firstName: string;
      lastName: string;
      /** Format: tel */
      phoneNumber?: string | null;
      /** Format: email */
      email: string;
      /** Format: password */
      password: string;
      role?: string | null;
    };
  };
}

export interface operations {}

export interface external {}
