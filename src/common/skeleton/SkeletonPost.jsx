import { SkeletonItem } from "@/styles/skeleton";

const SkeletonPost = () => (
  <>
    <SkeletonItem $width="60%" $height="24px" $mb="16px" />
    <SkeletonItem $width="30%" $height="16px" $mb="20px" />
    <SkeletonItem $width="100%" $height="300px" />
  </>
);

export default SkeletonPost;
