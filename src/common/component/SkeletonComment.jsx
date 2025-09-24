import { SkeletonItem } from "@/styles/skeleton";

const SkeletonComment = () => (
  <>
    <SkeletonItem $width="30%" $height="14px" />
    <SkeletonItem $width="100%" $height="60px" />
  </>
);

export default SkeletonComment;
