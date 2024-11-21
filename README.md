# partition-record

## Install

```bash
npm install partition-record
```

## Usage

```ts
import partitionRecord from 'partition-record'

const record = {
  stringValueKey: 'value',
  numberValueKey: 1
}

const [stringMap, numberMap] = partitionRecord(record, (key, value): value is string => typeof value === 'string')
```

## Credits

- Me, myself and I

