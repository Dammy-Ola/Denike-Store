export interface IImage {
  data: IImageData
}

export interface IImageData {
  id: number
  attributes: IImageDataAttributes
}

export interface IImageDataAttributes {
  name: string
  alternativeText: null | string
  caption: null | string
  width: number
  height: number
  formats: IImageFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  provider_metadata: IImageProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface IImageFormats {
  small: IImageSmall
  thumbnail: IImageSmall
}

export interface IImageSmall {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null | string
  size: number
  width: number
  height: number
  provider_metadata: IImageProviderMetadata
}

export interface IImageProviderMetadata {
  public_id: string
  resource_type: string
}
