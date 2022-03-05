# @miaooo/class-transformer-split

[![version](https://img.shields.io/npm/v/@miaooo/class-transformer-split.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/class-transformer-split)
[![downloads](https://img.shields.io/npm/dm/@miaooo/class-transformer-split.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/class-transformer-split)
[![license](https://img.shields.io/npm/l/@miaooo/class-transformer-split.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/class-transformer-split)
[![dependencies](https://img.shields.io/david/Val-istar-Guo/class-transformer-split.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/class-transformer-split)
[![coveralls](https://img.shields.io/coveralls/github/Val-istar-Guo/class-transformer-split.svg?style=flat-square)](https://coveralls.io/github/Val-istar-Guo/class-transformer-split)



<!-- description -->
A class transformer helper that splits the string into multiple string.
<!-- description -->

## Usage

<!-- usage -->
```typescript
// my-query.dto.ts
export MyQueryDTO {
  @ApiProperty({ type: 'string' })
  @Split(',')
  types: string[];
}
```

```typescript
// my.controller.ts
@Controller()
export class MyController {
  @Get('/')
  async get(
    @Query() filter: MyQueryDTO
  ) {
    // query.types will be splited by ',' automated
    return query;
  }
}
```
<!-- usage -->

<!-- addition --><!-- addition -->


## Contributing & Development

If there is any doubt, it is very welcome to discuss the issue together.
Please read [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md) and [CONTRIBUTING](.github/CONTRIBUTING.md).
