import { clx } from "@medusajs/ui"

const Divider = ({ className }: { className?: string }) => (
  <div
    className={clx("h-px w-full border-b border-gray-200 mt-1", className)}
    style={{ backgroundColor: "#EAE8E1" }}
  />
)

export default Divider
