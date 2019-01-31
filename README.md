# Instructions

```bash
yarn
yarn start
```

Error:
```sql
query failed: SELECT `MyEntity`.`id` AS `MyEntity_id`, `MyEntity`.`myField` AS `MyEntity_myField` FROM `my_entity` `MyEntity` WHERE `MyEntity`.`myField` IN (?, ?) AND `MyEntity`.`id` IN (?) LIMIT 1 -- PARAMETERS: [1,3]
error: { Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '?) LIMIT 1' at line 1
    at Query.Sequence._packetToError (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/protocol/sequences/Query.js:77:18)
    at Protocol._parsePacket (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/protocol/Protocol.js:278:23)
    at Parser.write (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/protocol/Parser.js:76:12)
    at Protocol.write (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/Connection.js:91:28)
    at Socket.<anonymous> (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/Connection.js:502:10)
    at Socket.emit (events.js:182:13)
    at Socket.EventEmitter.emit (domain.js:441:20)
    at addChunk (_stream_readable.js:283:12)
    --------------------
    at Protocol._enqueue (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at PoolConnection.query (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/mysql/lib/Connection.js:200:25)
    at MysqlQueryRunner.<anonymous> (/Users/edward/Projects/typeorm-findone-in-bug/src/driver/mysql/MysqlQueryRunner.ts:153:36)
    at step (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/tslib/tslib.js:133:27)
    at Object.next (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/tslib/tslib.js:114:57)
    at fulfilled (/Users/edward/Projects/typeorm-findone-in-bug/node_modules/tslib/tslib.js:104:62)
    at process._tickCallback (internal/process/next_tick.js:68:7)
  code: 'ER_PARSE_ERROR',
  errno: 1064,
  sqlMessage:
   'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'?) LIMIT 1\' at line 1',
  sqlState: '42000',
  index: 0,
  sql:
   'SELECT `MyEntity`.`id` AS `MyEntity_id`, `MyEntity`.`myField` AS `MyEntity_myField` FROM `my_entity` `MyEntity` WHERE `MyEntity`.`myField` IN (1, 3) AND `MyEntity`.`id` IN (?) LIMIT 1' }
```