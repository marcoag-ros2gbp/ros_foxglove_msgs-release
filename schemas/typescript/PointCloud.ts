// Generated from PointCloud by @foxglove/schemas

import { PackedElementField } from "./PackedElementField";
import { Pose } from "./Pose";
import { Time } from "./Time";

/** A collection of N-dimensional points, which may contain additional fields with information like normals, intensity, etc. */
export type PointCloud = {
  /** Timestamp of point cloud */
  timestamp: Time;

  /** Frame of reference */
  frame_id: string;

  /** The origin of the point cloud relative to the frame of reference */
  pose: Pose;

  /** Number of bytes between points in the `data` */
  point_stride: number;

  /** Fields in the `data` */
  fields: PackedElementField[];

  /** Point data, interpreted using `fields` */
  data: Uint8Array;
};
