---
title: Runtime styling animations
path: /map-sdk/tutorials/runtime-animations/
---

## Runtime styling animations
<!-- TODO add to animation tutorial
```java
private void animateSource() {
ValueAnimator locationAnimator = ValueAnimator.ofObject(new PointEvaluator(),
  Point.fromCoordinates(new double[] {previousLocation.getLongitude(), previousLocation.getLatitude()}),
  Point.fromCoordinates(new double[] {location.getLongitude(), location.getLatitude()})
    );

locationAnimator.setDuration(1000);
locationAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
  @Override
  public void onAnimationUpdate(ValueAnimator animation) {
    if (locationGeoJsonSource != null) {
      locationGeoJsonSource.setGeoJson(FeatureCollection.fromFeatures(
        new Feature[] {Feature.fromGeometry((Point) animation.getAnimatedValue())}
      ));
    }
  }
});
locationAnimator.start();
}

// Method is used to interpolate the user icon animation.
private static class PointEvaluator implements TypeEvaluator<Point> {
  @Override
  public Point evaluate(float fraction, Point startValue, Point endValue) {
    return Point.fromCoordinates(new double[] {
      startValue.getCoordinates().getLongitude() + (
        (endValue.getCoordinates().getLongitude() - startValue.getCoordinates().getLongitude()) * fraction),
      startValue.getCoordinates().getLatitude() + (
        (endValue.getCoordinates().getLatitude() - startValue.getCoordinates().getLatitude()) * fraction)
    });
  }
}
``` -->
