// Client
declare
;('storyblok-js-client/richTextResolver')

// these are the types for the storyblok api
type ISbAsset = {
  id?: number
  alt: string
  name?: string
  focus?: string | null
  title?: string
  filename: string
  copyright?: string
  fieldtype?: string
}

type ISbLink = {
  id?: string
  url: string
  linktype?: string
  fieldtype?: string
  cached_url: string
  anchor?: string
  story?: {
    name: string
    id: number
    uuid: string
    slug: string
    url: string
    full_slug: string
    _stopResolving: boolean
  }
}
