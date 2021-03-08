const prefixes = {
  as: 'http://www.w3.org/ns/activitystreams#',
  cc: 'http://creativecommons.org/ns#',
  cnt: 'http://www.w3.org/2011/content#',
  constant: 'http://qudt.org/vocab/constant/',
  csvw: 'http://www.w3.org/ns/csvw#',
  ctag: 'http://commontag.org/ns#',
  dash: 'http://datashapes.org/dash#',
  dbo: 'http://dbpedia.org/ontology/',
  dc11: 'http://purl.org/dc/elements/1.1/',
  dcat: 'http://www.w3.org/ns/dcat#',
  dcterms: 'http://purl.org/dc/terms/',
  discipline: 'http://qudt.org/vocab/discipline/',
  doap: 'http://usefulinc.com/ns/doap#',
  dpv: 'http://www.w3.org/ns/dpv#',
  dqv: 'http://www.w3.org/ns/dqv#',
  dtype: 'http://www.linkedmodel.org/schema/dtype#',
  duv: 'http://www.w3.org/ns/duv#',
  earl: 'https://www.w3.org/ns/earl#',
  foaf: 'http://xmlns.com/foaf/0.1/',
  frbr: 'http://purl.org/vocab/frbr/core#',
  geo: 'http://www.opengis.net/ont/geosparql#',
  geof: 'http://www.opengis.net/def/function/geosparql/',
  geor: 'http://www.opengis.net/def/rule/geosparql/',
  gml: 'http://www.opengis.net/ont/gml#',
  gn: 'http://www.geonames.org/ontology#',
  gr: 'http://purl.org/goodrelations/v1#',
  grddl: 'http://www.w3.org/2003/g/data-view#',
  gtfs: 'http://vocab.gtfs.org/terms#',
  http: 'http://www.w3.org/2011/http#',
  hydra: 'http://www.w3.org/ns/hydra/core#',
  ical: 'http://www.w3.org/2002/12/cal/icaltzd#',
  ldp: 'http://www.w3.org/ns/ldp#',
  lvont: 'http://lexvo.org/ontology#',
  ma: 'http://www.w3.org/ns/ma-ont#',
  oa: 'http://www.w3.org/ns/oa#',
  og: 'http://ogp.me/ns#',
  org: 'http://www.w3.org/ns/org#',
  owl: 'http://www.w3.org/2002/07/owl#',
  prefix: 'http://qudt.org/vocab/prefix/',
  prov: 'http://www.w3.org/ns/prov#',
  qb: 'http://purl.org/linked-data/cube#',
  qkdv: 'http://qudt.org/vocab/dimensionvector/',
  quantitykind: 'http://qudt.org/vocab/quantitykind/',
  qudt: 'http://qudt.org/schema/qudt/',
  qudtv: 'http://qudt.org/vocab/qudt/',
  rdau: 'http://rdaregistry.info/Elements/u/',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  rdfa: 'http://www.w3.org/ns/rdfa#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  rev: 'http://purl.org/stuff/rev#',
  rico: 'https://www.ica.org/standards/RiC/ontology#',
  rif: 'http://www.w3.org/2007/rif#',
  rr: 'http://www.w3.org/ns/r2rml#',
  rss: 'http://purl.org/rss/1.0/',
  schema: 'http://schema.org/',
  sd: 'http://www.w3.org/ns/sparql-service-description#',
  sdmx: 'http://purl.org/linked-data/sdmx#',
  sem: 'http://semanticweb.cs.vu.nl/2009/11/sem/',
  sf: 'http://www.opengis.net/ont/sf#',
  sh: 'http://www.w3.org/ns/shacl#',
  shex: 'http://www.w3.org/ns/shex#',
  sioc: 'http://rdfs.org/sioc/ns#',
  skos: 'http://www.w3.org/2004/02/skos/core#',
  skosxl: 'http://www.w3.org/2008/05/skos-xl#',
  sosa: 'http://www.w3.org/ns/sosa/',
  sou: 'http://qudt.org/vocab/sou/',
  ssn: 'http://www.w3.org/ns/ssn/',
  test: 'http://www.w3.org/2006/03/test-description#',
  time: 'http://www.w3.org/2006/time#',
  v: 'http://rdf.data-vocabulary.org/#',
  vaem: 'http://www.linkedmodel.org/schema/vaem#',
  vann: 'http://purl.org/vocab/vann/',
  vcard: 'http://www.w3.org/2006/vcard/ns#',
  void: 'http://rdfs.org/ns/void#',
  vs: 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
  wdr: 'http://www.w3.org/2007/05/powder#',
  wdrs: 'http://www.w3.org/2007/05/powder-s#',
  wgs: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
  xhv: 'http://www.w3.org/1999/xhtml/vocab#',
  xkos: 'http://rdf-vocabulary.ddialliance.org/xkos#',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xsd: 'http://www.w3.org/2001/XMLSchema#'
}

type KnownPrefixes = {
  readonly [key in keyof typeof prefixes]: string
}
interface CustomPrefixes {
  [key: string]: string;
}

export default prefixes as KnownPrefixes & CustomPrefixes
