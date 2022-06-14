// Generated from Pose by @foxglove/schemas

import { Quaternion } from "./Quaternion";
import { Vector3 } from "./Vector3";

/** A position and orientation for an object or reference frame in 3D space */
export type Pose = {
  /** Point denoting position in 3D space */
  position: Vector3;

  /** Quaternion denoting orientation in 3D space */
  orientation: Quaternion;
};
