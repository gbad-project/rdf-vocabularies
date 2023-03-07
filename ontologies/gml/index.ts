/* This file was automatically generated. Do not edit by hand. */

const {
  geo,
  rdfs,
  ns3,
  gml,
  rdf,
  owl
} = {
  'geo': 'http://www.opengis.net/ont/geosparql#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns3': 'http://www.opengis.net/ont/',
  'gml': 'http://www.opengis.net/ont/gml#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${geo}Feature`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${geo}Geometry`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${geo}SpatialObject`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(`${rdfs}label`),
      literal(`Abstract Curve Segment`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${geo}Geometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(`${rdfs}label`),
      literal(`Abstract Geometric Primitive`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometry`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometry`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometry`),
      namedNode(`${rdfs}label`),
      literal(`Abstract Geometry`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGeometry`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${geo}Geometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(`${rdfs}label`),
      literal(`Abstract Gridded Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractParametricCurveSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractParametricCurveSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractParametricCurveSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractParametricCurveSurface`),
      namedNode(`${rdfs}label`),
      literal(`Abstract Parametric Curve Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractParametricCurveSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractSurfacePatch`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractSurfacePatch`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractSurfacePatch`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractSurfacePatch`),
      namedNode(`${rdfs}label`),
      literal(`Abstract Surface Patch`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}AbstractSurfacePatch`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${geo}Geometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Arc`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Arc`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Arc`),
      namedNode(`${rdfs}label`),
      literal(`Arc`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Arc`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}ArcString`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByBulge`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByBulge`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByBulge`),
      namedNode(`${rdfs}label`),
      literal(`Arc by Bulge`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByBulge`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}ArcStringByBulge`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByCenterPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByCenterPoint`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByCenterPoint`),
      namedNode(`${rdfs}label`),
      literal(`Arc by Center Point`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcByCenterPoint`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcString`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcString`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcString`),
      namedNode(`${rdfs}label`),
      literal(`Arc String`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcString`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcStringByBulge`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcStringByBulge`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcStringByBulge`),
      namedNode(`${rdfs}label`),
      literal(`Arc String by Bulge`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}ArcStringByBulge`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}BSpline`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}BSpline`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}BSpline`),
      namedNode(`${rdfs}label`),
      literal(`BSpline`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}BSpline`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}SplineCurve`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Bezier`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Bezier`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Bezier`),
      namedNode(`${rdfs}label`),
      literal(`Bezier`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Bezier`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}BSpline`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Circle`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Circle`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Circle`),
      namedNode(`${rdfs}label`),
      literal(`Circle`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Circle`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Arc`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CircleByCenterPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CircleByCenterPoint`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CircleByCenterPoint`),
      namedNode(`${rdfs}label`),
      literal(`CircleByCenterPoint`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CircleByCenterPoint`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}ArcByCenterPoint`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Clothoid`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Clothoid`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Clothoid`),
      namedNode(`${rdfs}label`),
      literal(`Clothoid`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Clothoid`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Composite`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Composite`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Composite`),
      namedNode(`${rdfs}label`),
      literal(`Composite`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Composite`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}GeometricComplex`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeCurve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeCurve`),
      namedNode(`${rdfs}label`),
      literal(`Composite Curve`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Composite`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}OrientableCurve`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSolid`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSolid`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSolid`),
      namedNode(`${rdfs}label`),
      literal(`Composite Solid`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSolid`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Composite`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSolid`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Solid`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSurface`),
      namedNode(`${rdfs}label`),
      literal(`Composite Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Composite`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CompositeSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}OrientableSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cone`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cone`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cone`),
      namedNode(`${rdfs}label`),
      literal(`Cone`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cone`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CubicSpline`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CubicSpline`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CubicSpline`),
      namedNode(`${rdfs}label`),
      literal(`Cubic Spline`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}CubicSpline`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}PolynomialSpline`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Curve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Curve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Curve`),
      namedNode(`${rdfs}label`),
      literal(`Curve`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Curve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Curve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}OrientableCurve`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cylinder`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cylinder`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cylinder`),
      namedNode(`${rdfs}label`),
      literal(`Cylinder`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Cylinder`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Geodesic`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Geodesic`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Geodesic`),
      namedNode(`${rdfs}label`),
      literal(`Geodesic`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Geodesic`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}GeodesicString`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeodesicString`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeodesicString`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeodesicString`),
      namedNode(`${rdfs}label`),
      literal(`Geodesic String`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeodesicString`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeometricComplex`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeometricComplex`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeometricComplex`),
      namedNode(`${rdfs}label`),
      literal(`Geometric Complex`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}GeometricComplex`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineString`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineString`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineString`),
      namedNode(`${rdfs}label`),
      literal(`Line String`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineString`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}LineStringSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineStringSegment`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineStringSegment`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineStringSegment`),
      namedNode(`${rdfs}label`),
      literal(`Line String Segment`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LineStringSegment`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LinearRing`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LinearRing`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LinearRing`),
      namedNode(`${rdfs}label`),
      literal(`Linear Ring`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}LinearRing`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Ring`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiCurve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiCurve`),
      namedNode(`${rdfs}label`),
      literal(`Multi-Curve`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}MultiGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiGeometry`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiGeometry`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiGeometry`),
      namedNode(`${rdfs}label`),
      literal(`Multi-Geometry`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiGeometry`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiPoint`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiPoint`),
      namedNode(`${rdfs}label`),
      literal(`Multi-Point`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiPoint`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}MultiGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSolid`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSolid`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSolid`),
      namedNode(`${rdfs}label`),
      literal(`Multi-Solid`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSolid`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}MultiGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSurface`),
      namedNode(`${rdfs}label`),
      literal(`Multi-Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}MultiSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}MultiGeometry`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OffsetCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OffsetCurve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OffsetCurve`),
      namedNode(`${rdfs}label`),
      literal(`Offset Curve`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OffsetCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableCurve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableCurve`),
      namedNode(`${rdfs}label`),
      literal(`Orientable Curve`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableSurface`),
      namedNode(`${rdfs}label`),
      literal(`Orientable Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}OrientableSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Point`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Point`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Point`),
      namedNode(`${rdfs}label`),
      literal(`Point`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Point`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Polygon`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Polygon`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Polygon`),
      namedNode(`${rdfs}label`),
      literal(`Polygon`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Polygon`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Surface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolygonPatch`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolygonPatch`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolygonPatch`),
      namedNode(`${rdfs}label`),
      literal(`Polygon Patch`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolygonPatch`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractSurfacePatch`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolyhedralSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolyhedralSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolyhedralSurface`),
      namedNode(`${rdfs}label`),
      literal(`Polyhedral Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolyhedralSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}Surface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolynomialSpline`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolynomialSpline`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolynomialSpline`),
      namedNode(`${rdfs}label`),
      literal(`Polynomial Spline`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}PolynomialSpline`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}SplineCurve`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Rectangle`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Rectangle`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Rectangle`),
      namedNode(`${rdfs}label`),
      literal(`Rectangle`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Rectangle`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}PolygonPatch`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Ring`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Ring`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Ring`),
      namedNode(`${rdfs}label`),
      literal(`Ring`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Ring`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}CompositeCurve`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Shell`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Shell`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Shell`),
      namedNode(`${rdfs}label`),
      literal(`Shell`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Shell`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}CompositeSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Solid`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Solid`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Solid`),
      namedNode(`${rdfs}label`),
      literal(`Solid`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Solid`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Sphere`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Sphere`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Sphere`),
      namedNode(`${rdfs}label`),
      literal(`Sphere`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Sphere`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGriddedSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}SplineCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}SplineCurve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}SplineCurve`),
      namedNode(`${rdfs}label`),
      literal(`Spline Curve`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}SplineCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractCurveSegment`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Surface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Surface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Surface`),
      namedNode(`${rdfs}label`),
      literal(`Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Surface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}AbstractGeometricPrimitive`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Surface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}OrientableSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Tin`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Tin`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Tin`),
      namedNode(`${rdfs}label`),
      literal(`Triangulated Irregular Network`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Tin`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}TriangulatedSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Triangle`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Triangle`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Triangle`),
      namedNode(`${rdfs}label`),
      literal(`Triangle`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}Triangle`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}PolygonPatch`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}TriangulatedSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}TriangulatedSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns3}gml`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}TriangulatedSurface`),
      namedNode(`${rdfs}label`),
      literal(`Triangulated Surface`, 'en'),
      namedNode(gml)
    ),
    quad(
      namedNode(`${gml}TriangulatedSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gml}PolyhedralSurface`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${ns3}gml`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(gml)
    ),
    quad(
      namedNode(`${ns3}gml`),
      namedNode(`${owl}imports`),
      namedNode(`${ns3}geosparql`),
      namedNode(gml)
    ),

  ]
}
