npm run build
aws s3 rm s3://fitness-tracker.me --recursive
aws s3 cp --recursive ./dist/sti s3://fitness-tracker.me
aws cloudfront create-invalidation --distribution-id EWRH48YNHSG7N --paths /\*
