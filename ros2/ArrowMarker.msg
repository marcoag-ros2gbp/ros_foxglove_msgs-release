# foxglove_msgs/msg/ArrowMarker
# A marker representing an arrow

# Generated by https://github.com/foxglove/schemas

# Position of the arrow's tail and orientation of the arrow. Identity orientation means the arrow points in the +x direction.
geometry_msgs/Pose pose

# Length of the arrow
float64 length

# Diameter of the arrow shaft
float64 shaft_diameter

# Diameter of the arrow head
float64 head_diameter

# Length of the arrow head
float64 head_length

# Color of the arrow
foxglove_msgs/Color color
