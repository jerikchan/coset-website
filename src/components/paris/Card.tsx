import React from "react"
import { ComponentProps } from "react"
import cx from "clsx"

export default function Card(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cx(
        "rounded-3xl px-6 md:px-14 py-10 md:py-12 overflow-hidden relative flex flex-col",
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
