import HttpResponse from "../interfaces/http-helper-interface";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data,
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (error: any): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: { error },
  };
};

export const unauthorized = async (error: any): Promise<HttpResponse> => {
  return {
    statusCode: 401,
    body: { error },
  };
};

export const forbidden = async (error: any): Promise<HttpResponse> => {
  return {
    statusCode: 403,
    body: { error },
  };
};

export const notFound = async (error: any): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: { error },
  };
};

export const serverError = async (error: any): Promise<HttpResponse> => {
  return {
    statusCode: 500,
    body: { error },
  };
};
