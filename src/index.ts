import { Transform, TransformOptions } from 'class-transformer'


export function Split(splitor: string, options?: TransformOptions): PropertyDecorator {
  return Transform(
    param => {
      if (typeof param.value === 'string') return param.value.split(splitor)
      return param.value as unknown
    },
    options,
  )
}
