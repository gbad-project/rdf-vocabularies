/* This file was automatically generated. Do not edit by hand. */

const {
  sf,
  rdf,
  rdfs,
  owl,
  ns5,
  geo
} = {
  'sf': 'http://www.opengis.net/ont/sf#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'ns5': 'http://www.opengis.net/ont/',
  'geo': 'http://www.opengis.net/ont/geosparql#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${sf}Curve`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Curve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Curve`),
      namedNode(`${rdfs}comment`),
      literal(`
A Curve is a 1-dimensional geometric object usually stored as a sequence of Points, with the subtype of Curve specifying the form of the interpolation between Points. This specification defines only one subclass of Curve, LineString, which uses linear interpolation between Points.
A Curve is a 1-dimensional geometric object that is the homeomorphic image of a real, closed, interval.
A Curve is simple if it does not pass through the same Point twice with the possible exception of the two end
points.
A Curve is closed if its start Point is equal to its end Point.
The boundary of a closed Curve is empty.
A Curve that is simple and closed is a Ring.
The boundary of a non-closed Curve consists of its two end Points.
A Curve is defined as topologically closed, that is, it contains its endpoints f(a) and f(b).
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Curve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Curve`),
      namedNode(`${rdfs}label`),
      literal(`Curve`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Curve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Geometry`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Geometry`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Geometry`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Geometry`),
      namedNode(`${rdfs}comment`),
      literal(`
Geometry is the root class of the hierarchy.
The instantiable subclasses of Geometry are restricted to 0, 1 and 2-dimensional geometric objects that exist in 2, 3 or 4-dimensional coordinate space (R2, R3 or R4). Geometry values in R2 have points with coordinate values for x and y. Geometry values in R3 have points with coordinate values for x, y and z or for x, y and m. Geometry values in R4 have points with coordinate values for x, y, z and m.
The interpretation of the coordinates is subject to the coordinate reference systems associated to the point. All coordinates within a geometry object should be in the same coordinate reference systems. Each coordinate shall be unambiguously associated to a coordinate reference system either directly or through its containing geometry. The z coordinate of a point is typically, but not necessarily, represents altitude or elevation. The m coordinate represents a measurement.
All Geometry classes described in this specification are defined so that instances of Geometry are topologically closed, i.e. all represented geometries include their boundary as point sets. This does not affect their representation, and open version of the same classes may be used in other circumstances, such as topological representations.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Geometry`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Geometry`),
      namedNode(`${rdfs}label`),
      literal(`Geometry`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Geometry`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${geo}Geometry`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}GeometryCollection`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}GeometryCollection`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}GeometryCollection`),
      namedNode(`${rdfs}comment`),
      literal(`
A GeometryCollection is a geometric object that is a collection of some number of geometric objects.
All the elements in a GeometryCollection shall be in the same Spatial Reference System. This is also the Spatial Reference System for the GeometryCollection.
GeometryCollection places no other constraints on its elements. Subclasses of GeometryCollection may restrict membership based on dimension and may also place other constraints on the degree of spatial overlap between elements.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}GeometryCollection`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}GeometryCollection`),
      namedNode(`${rdfs}label`),
      literal(`Geometry Collection`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}GeometryCollection`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Geometry`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Line`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Line`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Line`),
      namedNode(`${rdfs}comment`),
      literal(`
A Line is a LineString with exactly 2 Points.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Line`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Line`),
      namedNode(`${rdfs}label`),
      literal(`Line`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Line`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}LineString`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LineString`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LineString`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LineString`),
      namedNode(`${rdfs}comment`),
      literal(`
A LineString is a Curve with linear interpolation between Points. Each consecutive pair of Points defines a Line segment.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LineString`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LineString`),
      namedNode(`${rdfs}label`),
      literal(`Line String`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LineString`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Curve`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LinearRing`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LinearRing`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LinearRing`),
      namedNode(`${rdfs}comment`),
      literal(`
A LinearRing is a LineString that is both closed and simple.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LinearRing`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LinearRing`),
      namedNode(`${rdfs}label`),
      literal(`Linear Ring`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}LinearRing`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}LineString`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiCurve`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiCurve`),
      namedNode(`${rdfs}comment`),
      literal(`
A MultiCurve is a 1-dimensional GeometryCollection whose elements are Curves.
A MultiCurve defines a set of methods for its subclasses and is included for reasons of extensibility.
A MultiCurve is simple if and only if all of its elements are simple and the only intersections between any two elements occur at Points that are on the boundaries of both elements.
The boundary of a MultiCurve is obtained by applying the mod 2 union rule: A Point is in the boundary of a MultiCurve if it is in the boundaries of an odd number of elements of the MultiCurve.
A MultiCurve is closed if all of its elements are closed. The boundary of a closed MultiCurve is always empty.
A MultiCurve is defined as topologically closed.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiCurve`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiCurve`),
      namedNode(`${rdfs}label`),
      literal(`Multi Curve`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiCurve`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}GeometryCollection`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiLineString`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiLineString`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiLineString`),
      namedNode(`${rdfs}comment`),
      literal(`
A MultiLineString is a MultiCurve whose elements are LineStrings.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiLineString`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiLineString`),
      namedNode(`${rdfs}label`),
      literal(`Multi Line String`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiLineString`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}MultiCurve`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPoint`),
      namedNode(`${rdfs}comment`),
      literal(`
A MultiPoint is a 0-dimensional GeometryCollection. The elements of a MultiPoint are restricted to Points. ThePoints are not connected or ordered in any semantically important way.
A MultiPoint is simple if no two Points in the MultiPoint are equal (have identical coordinate values in X and Y).
Every MultiPoint is spatially equal to a simple Multipoint.
The boundary of a MultiPoint is the empty set.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPoint`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPoint`),
      namedNode(`${rdfs}label`),
      literal(`Multi Point`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPoint`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}GeometryCollection`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPolygon`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPolygon`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPolygon`),
      namedNode(`${rdfs}comment`),
      literal(`
A MultiPolygon is a MultiSurface whose elements are Polygons.
The assertions for MultiPolygons are as follows.
a) The interiors of 2 Polygons that are elements of a MultiPolygon may not intersect.
b) The boundaries of any 2 Polygons that are elements of a MultiPolygon may not cross and may touch at only a finite number of Points.
c) A MultiPolygon is defined as topologically closed.
d) A MultiPolygon may not have cut lines, spikes or punctures, a MultiPolygon is a regular closed Point set,
e) The interior of a MultiPolygon with more than 1 Polygon is not connected; the number of connected components of the interior of a MultiPolygon is equal to the number of Polygons in the MultiPolygon. 
The boundary of a MultiPolygon is a set of closed Curves (LineStrings) corresponding to the boundaries of its element Polygons. Each Curve in the boundary of the MultiPolygon is in the boundary of exactly 1 element Polygon, and every Curve in the boundary of an element Polygon is in the boundary of the MultiPolygon.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPolygon`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPolygon`),
      namedNode(`${rdfs}label`),
      literal(`Multi Polygon`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiPolygon`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}MultiSurface`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiSurface`),
      namedNode(`${rdfs}comment`),
      literal(`
A MultiSurface is a 2-dimensional GeometryCollection whose elements are Surfaces, all using coordinates from the same coordinate reference system. The geometric interiors of any two Surfaces in a MultiSurface may not intersect in the full coordinate system. The boundaries of any two coplanar elements in a MultiSurface may intersect, at most, at a finite number of Points. If they were to meet along a curve, they could be merged into a single surface.
A MultiSurface may be used to represent heterogeneous surfaces collections of polygons and polyhedral surfaces. It defines a set of methods for its subclasses. The subclass of MultiSurface is MultiPolygon corresponding to a collection of Polygons only. Other collections shall use MultiSurface.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiSurface`),
      namedNode(`${rdfs}label`),
      literal(`Multi Surface`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}MultiSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}GeometryCollection`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Point`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Point`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Point`),
      namedNode(`${rdfs}comment`),
      literal(`
A Point is a 0-dimensional geometric object and represents a single location in coordinate space. 
A Point has an x-coordinate value, a y-coordinate value. If called for by the associated Spatial Reference System, it may also have coordinate values for z and m.
The boundary of a Point is the empty set.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Point`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Point`),
      namedNode(`${rdfs}label`),
      literal(`Point`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Point`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Geometry`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Polygon`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Polygon`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Polygon`),
      namedNode(`${rdfs}comment`),
      literal(`
A Polygon is a planar Surface defined by 1 exterior boundary and 0 or more interior boundaries. Each interior boundary defines a hole in the Polygon.
The exterior boundary LinearRing defines the top of the surface which is the side of the surface from which the exterior boundary appears to traverse the boundary in a counter clockwise direction. The interior LinearRings will have the opposite orientation, and appear as clockwise when viewed from the top,
The assertions for Polygons (the rules that define valid Polygons) are as follows:
a) Polygons are topologically closed;
b) The boundary of a Polygon consists of a set of LinearRings that make up its exterior and interior boundaries;
c) No two Rings in the boundary cross and the Rings in the boundary of a Polygon may intersect at a Point but only as a tangent.
d) A Polygon may not have cut lines, spikes or punctures.
e) The interior of every Polygon is a connected point set;
f) The exterior of a Polygon with 1 or more holes is not connected. Each hole defines a connected component of the exterior.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Polygon`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Polygon`),
      namedNode(`${rdfs}label`),
      literal(`Polygon`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Polygon`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Surface`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(`${rdfs}comment`),
      literal(`
A PolyhedralSurface is a contiguous collection of polygons, which share common boundary segments. For each pair of polygons that touch, the common boundary shall be expressible as a finite collection of LineStrings. Each such LineString shall be part of the boundary of at most 2 Polygon patches. 
For any two polygons that share a common boundary, the top of the polygon shall be consistent. This means that when two LinearRings from these two Polygons traverse the common boundary segment, they do so in opposite directions. Since the Polyhedral surface is contiguous, all polygons will be thus consistently oriented. This means that a non-oriented surface (such as Mbius band) shall not have single surface representations. They may be represented by a MultiSurface.
If each such LineString is the boundary of exactly 2 Polygon patches, then the PolyhedralSurface is a simple, closed polyhedron and is topologically isomorphic to the surface of a sphere. By the Jordan Surface Theorem (Jordans Theorem for 2-spheres), such polyhedrons enclose a solid topologically isomorphic to the interior of a sphere; the ball. In this case, the top of the surface will either point inward or outward of the enclosed finite solid. If outward, the surface is the exterior boundary of the enclosed surface. If inward, the surface is the interior of the infinite complement of the enclosed solid. A Ball with some number of voids (holes) inside can thus be presented as one exterior boundary shell, and some number in interior boundary shells.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(`${rdfs}label`),
      literal(`Polyhedral Surface`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Surface`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Surface`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Surface`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Surface`),
      namedNode(`${rdfs}comment`),
      literal(`
A Surface is a 2-dimensional geometric object.
A simple Surface may consists of a single patch that is associated with one exterior boundary and 0 or more interior boundaries. A single such Surface patch in 3-dimensional space is isometric to planar Surfaces, by a simple affine rotation matrix that rotates the patch onto the plane z = 0. If the patch is not vertical, the projection onto the same plane is an isomorphism, and can be represented as a linear transformation, i.e. an affine.
Polyhedral Surfaces are formed by stitching together such simple Surfaces patches along their common boundaries. Such polyhedral Surfaces in a 3-dimensional space may not be planar as a whole, depending on the orientation of their planar normals. If all the patches are in alignment (their normals are parallel), then the whole stitched polyhedral surface is co-planar and can be represented as a single patch if it is connected.
The boundary of a simple Surface is the set of closed Curves corresponding to its exterior and interior boundaries.
A Polygon is a simple Surface that is planar. A PolyhedralSurface is a simple surface, consisting of some number of Polygon patches or facets. If a PolyhedralSurface is closed, then it bounds a solid. A MultiSurface containing a set of closed PolyhedralSurfaces can be used to represent a Solid object with holes.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Surface`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Surface`),
      namedNode(`${rdfs}label`),
      literal(`Surface`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Surface`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Geometry`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}TIN`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}TIN`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}TIN`),
      namedNode(`${rdfs}comment`),
      literal(`
A TIN (triangulated irregular network) is a PolyhedralSurface consisting only of Triangle patches.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}TIN`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}TIN`),
      namedNode(`${rdfs}label`),
      literal(`Triangulated Irregular Network`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}TIN`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}PolyhedralSurface`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Triangle`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Triangle`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Triangle`),
      namedNode(`${rdfs}comment`),
      literal(`
 A Triangle is a polygon with 3 distinct, non-collinear vertices and no interior boundary.
    `, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Triangle`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}sf`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Triangle`),
      namedNode(`${rdfs}label`),
      literal(`Triangle`, 'en'),
      namedNode(sf)
    ),
    quad(
      namedNode(`${sf}Triangle`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sf}Polygon`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${ns5}sf`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(sf)
    ),
    quad(
      namedNode(`${ns5}sf`),
      namedNode(`${owl}imports`),
      namedNode(`${ns5}geosparql`),
      namedNode(sf)
    ),

  ]
}
