---
title: Directions
path: /mapbox-services/overview/directions/
---
# Directions

- talk about how it's a wrapper for the mb directions api specifically for java/android users
- multiple waypoints between origin and final destination (up to 25 except traffic)
- point out the navigation SDK
- link to api documentation

- link to directions request example

### Directions request

- Talk about Builder
- required parameters
- important optional params
- different profiles
- alternative routes (ordered by descending recommendation rank. May contain at most two routes.)
- bearings and continue straight and how that effects the route

- code snippet

### Directions response

- not all request have a result, go through potential outcomes (usage of `code`)
- waypoints inside response (original points snapped to route and with additional info)
- retrofit
- convert line geometry to a lineString

- code snippet

#### Legs

- discuss what could cause 2 or more legs in a response (rare)
- annotations

#### Steps

- getting the step object
- getting step instructions
- intersections


#### Maneuvers

- how to get step maneuver object from response
- point out that maneuvers happen generally at first coordinate in step
- modifier and type
- instructions
- lanes object
