
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Therapist
 * 
 */
export type Therapist = $Result.DefaultSelection<Prisma.$TherapistPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model MatchRequest
 * 
 */
export type MatchRequest = $Result.DefaultSelection<Prisma.$MatchRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.therapist`: Exposes CRUD operations for the **Therapist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Therapists
    * const therapists = await prisma.therapist.findMany()
    * ```
    */
  get therapist(): Prisma.TherapistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchRequest`: Exposes CRUD operations for the **MatchRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchRequests
    * const matchRequests = await prisma.matchRequest.findMany()
    * ```
    */
  get matchRequest(): Prisma.MatchRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Therapist: 'Therapist',
    Reservation: 'Reservation',
    Chat: 'Chat',
    MatchRequest: 'MatchRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "therapist" | "reservation" | "chat" | "matchRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Therapist: {
        payload: Prisma.$TherapistPayload<ExtArgs>
        fields: Prisma.TherapistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          findFirst: {
            args: Prisma.TherapistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          findMany: {
            args: Prisma.TherapistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          create: {
            args: Prisma.TherapistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          createMany: {
            args: Prisma.TherapistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          delete: {
            args: Prisma.TherapistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          update: {
            args: Prisma.TherapistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          deleteMany: {
            args: Prisma.TherapistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TherapistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          upsert: {
            args: Prisma.TherapistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          aggregate: {
            args: Prisma.TherapistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapist>
          }
          groupBy: {
            args: Prisma.TherapistGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      MatchRequest: {
        payload: Prisma.$MatchRequestPayload<ExtArgs>
        fields: Prisma.MatchRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>
          }
          findFirst: {
            args: Prisma.MatchRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>
          }
          findMany: {
            args: Prisma.MatchRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>[]
          }
          create: {
            args: Prisma.MatchRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>
          }
          createMany: {
            args: Prisma.MatchRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>[]
          }
          delete: {
            args: Prisma.MatchRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>
          }
          update: {
            args: Prisma.MatchRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>
          }
          deleteMany: {
            args: Prisma.MatchRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>[]
          }
          upsert: {
            args: Prisma.MatchRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchRequestPayload>
          }
          aggregate: {
            args: Prisma.MatchRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchRequest>
          }
          groupBy: {
            args: Prisma.MatchRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MatchRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    therapist?: TherapistOmit
    reservation?: ReservationOmit
    chat?: ChatOmit
    matchRequest?: MatchRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reservations: number
    chats: number
    matchRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    matchRequests?: boolean | UserCountOutputTypeCountMatchRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchRequestWhereInput
  }


  /**
   * Count Type TherapistCountOutputType
   */

  export type TherapistCountOutputType = {
    reservations: number
    chats: number
    matchRequests: number
  }

  export type TherapistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | TherapistCountOutputTypeCountReservationsArgs
    chats?: boolean | TherapistCountOutputTypeCountChatsArgs
    matchRequests?: boolean | TherapistCountOutputTypeCountMatchRequestsArgs
  }

  // Custom InputTypes
  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCountOutputType
     */
    select?: TherapistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountMatchRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    symptom: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    symptom: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    symptom: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    symptom?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    symptom?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    symptom?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    symptom: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    symptom?: boolean
    createdAt?: boolean
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    matchRequests?: boolean | User$matchRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    symptom?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    symptom?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    symptom?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "symptom" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    matchRequests?: boolean | User$matchRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      matchRequests: Prisma.$MatchRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      symptom: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchRequests<T extends User$matchRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$matchRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly symptom: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.matchRequests
   */
  export type User$matchRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    where?: MatchRequestWhereInput
    orderBy?: MatchRequestOrderByWithRelationInput | MatchRequestOrderByWithRelationInput[]
    cursor?: MatchRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchRequestScalarFieldEnum | MatchRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Therapist
   */

  export type AggregateTherapist = {
    _count: TherapistCountAggregateOutputType | null
    _avg: TherapistAvgAggregateOutputType | null
    _sum: TherapistSumAggregateOutputType | null
    _min: TherapistMinAggregateOutputType | null
    _max: TherapistMaxAggregateOutputType | null
  }

  export type TherapistAvgAggregateOutputType = {
    experience: number | null
    lat: number | null
    lng: number | null
    walletBalance: number | null
  }

  export type TherapistSumAggregateOutputType = {
    experience: number | null
    lat: number | null
    lng: number | null
    walletBalance: number | null
  }

  export type TherapistMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    specialty: string | null
    experience: number | null
    bio: string | null
    license: string | null
    imageUrl: string | null
    lat: number | null
    lng: number | null
    walletBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    specialty: string | null
    experience: number | null
    bio: string | null
    license: string | null
    imageUrl: string | null
    lat: number | null
    lng: number | null
    walletBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistCountAggregateOutputType = {
    id: number
    name: number
    email: number
    specialty: number
    experience: number
    bio: number
    license: number
    imageUrl: number
    lat: number
    lng: number
    walletBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapistAvgAggregateInputType = {
    experience?: true
    lat?: true
    lng?: true
    walletBalance?: true
  }

  export type TherapistSumAggregateInputType = {
    experience?: true
    lat?: true
    lng?: true
    walletBalance?: true
  }

  export type TherapistMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    specialty?: true
    experience?: true
    bio?: true
    license?: true
    imageUrl?: true
    lat?: true
    lng?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    specialty?: true
    experience?: true
    bio?: true
    license?: true
    imageUrl?: true
    lat?: true
    lng?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    specialty?: true
    experience?: true
    bio?: true
    license?: true
    imageUrl?: true
    lat?: true
    lng?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TherapistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapist to aggregate.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Therapists
    **/
    _count?: true | TherapistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistMaxAggregateInputType
  }

  export type GetTherapistAggregateType<T extends TherapistAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapist[P]>
      : GetScalarType<T[P], AggregateTherapist[P]>
  }




  export type TherapistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistWhereInput
    orderBy?: TherapistOrderByWithAggregationInput | TherapistOrderByWithAggregationInput[]
    by: TherapistScalarFieldEnum[] | TherapistScalarFieldEnum
    having?: TherapistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistCountAggregateInputType | true
    _avg?: TherapistAvgAggregateInputType
    _sum?: TherapistSumAggregateInputType
    _min?: TherapistMinAggregateInputType
    _max?: TherapistMaxAggregateInputType
  }

  export type TherapistGroupByOutputType = {
    id: string
    name: string
    email: string
    specialty: string
    experience: number
    bio: string | null
    license: string | null
    imageUrl: string | null
    lat: number
    lng: number
    walletBalance: number
    createdAt: Date
    updatedAt: Date
    _count: TherapistCountAggregateOutputType | null
    _avg: TherapistAvgAggregateOutputType | null
    _sum: TherapistSumAggregateOutputType | null
    _min: TherapistMinAggregateOutputType | null
    _max: TherapistMaxAggregateOutputType | null
  }

  type GetTherapistGroupByPayload<T extends TherapistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistGroupByOutputType[P]>
        }
      >
    >


  export type TherapistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    experience?: boolean
    bio?: boolean
    license?: boolean
    imageUrl?: boolean
    lat?: boolean
    lng?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | Therapist$reservationsArgs<ExtArgs>
    chats?: boolean | Therapist$chatsArgs<ExtArgs>
    matchRequests?: boolean | Therapist$matchRequestsArgs<ExtArgs>
    _count?: boolean | TherapistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    experience?: boolean
    bio?: boolean
    license?: boolean
    imageUrl?: boolean
    lat?: boolean
    lng?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    experience?: boolean
    bio?: boolean
    license?: boolean
    imageUrl?: boolean
    lat?: boolean
    lng?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    experience?: boolean
    bio?: boolean
    license?: boolean
    imageUrl?: boolean
    lat?: boolean
    lng?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TherapistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "specialty" | "experience" | "bio" | "license" | "imageUrl" | "lat" | "lng" | "walletBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["therapist"]>
  export type TherapistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Therapist$reservationsArgs<ExtArgs>
    chats?: boolean | Therapist$chatsArgs<ExtArgs>
    matchRequests?: boolean | Therapist$matchRequestsArgs<ExtArgs>
    _count?: boolean | TherapistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TherapistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TherapistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TherapistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Therapist"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
      matchRequests: Prisma.$MatchRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      specialty: string
      experience: number
      bio: string | null
      license: string | null
      imageUrl: string | null
      lat: number
      lng: number
      walletBalance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["therapist"]>
    composites: {}
  }

  type TherapistGetPayload<S extends boolean | null | undefined | TherapistDefaultArgs> = $Result.GetResult<Prisma.$TherapistPayload, S>

  type TherapistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TherapistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TherapistCountAggregateInputType | true
    }

  export interface TherapistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Therapist'], meta: { name: 'Therapist' } }
    /**
     * Find zero or one Therapist that matches the filter.
     * @param {TherapistFindUniqueArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistFindUniqueArgs>(args: SelectSubset<T, TherapistFindUniqueArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Therapist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TherapistFindUniqueOrThrowArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Therapist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindFirstArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistFindFirstArgs>(args?: SelectSubset<T, TherapistFindFirstArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Therapist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindFirstOrThrowArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Therapists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Therapists
     * const therapists = await prisma.therapist.findMany()
     * 
     * // Get first 10 Therapists
     * const therapists = await prisma.therapist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistWithIdOnly = await prisma.therapist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistFindManyArgs>(args?: SelectSubset<T, TherapistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Therapist.
     * @param {TherapistCreateArgs} args - Arguments to create a Therapist.
     * @example
     * // Create one Therapist
     * const Therapist = await prisma.therapist.create({
     *   data: {
     *     // ... data to create a Therapist
     *   }
     * })
     * 
     */
    create<T extends TherapistCreateArgs>(args: SelectSubset<T, TherapistCreateArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Therapists.
     * @param {TherapistCreateManyArgs} args - Arguments to create many Therapists.
     * @example
     * // Create many Therapists
     * const therapist = await prisma.therapist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistCreateManyArgs>(args?: SelectSubset<T, TherapistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Therapists and returns the data saved in the database.
     * @param {TherapistCreateManyAndReturnArgs} args - Arguments to create many Therapists.
     * @example
     * // Create many Therapists
     * const therapist = await prisma.therapist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Therapists and only return the `id`
     * const therapistWithIdOnly = await prisma.therapist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Therapist.
     * @param {TherapistDeleteArgs} args - Arguments to delete one Therapist.
     * @example
     * // Delete one Therapist
     * const Therapist = await prisma.therapist.delete({
     *   where: {
     *     // ... filter to delete one Therapist
     *   }
     * })
     * 
     */
    delete<T extends TherapistDeleteArgs>(args: SelectSubset<T, TherapistDeleteArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Therapist.
     * @param {TherapistUpdateArgs} args - Arguments to update one Therapist.
     * @example
     * // Update one Therapist
     * const therapist = await prisma.therapist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistUpdateArgs>(args: SelectSubset<T, TherapistUpdateArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Therapists.
     * @param {TherapistDeleteManyArgs} args - Arguments to filter Therapists to delete.
     * @example
     * // Delete a few Therapists
     * const { count } = await prisma.therapist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistDeleteManyArgs>(args?: SelectSubset<T, TherapistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Therapists
     * const therapist = await prisma.therapist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistUpdateManyArgs>(args: SelectSubset<T, TherapistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapists and returns the data updated in the database.
     * @param {TherapistUpdateManyAndReturnArgs} args - Arguments to update many Therapists.
     * @example
     * // Update many Therapists
     * const therapist = await prisma.therapist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Therapists and only return the `id`
     * const therapistWithIdOnly = await prisma.therapist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TherapistUpdateManyAndReturnArgs>(args: SelectSubset<T, TherapistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Therapist.
     * @param {TherapistUpsertArgs} args - Arguments to update or create a Therapist.
     * @example
     * // Update or create a Therapist
     * const therapist = await prisma.therapist.upsert({
     *   create: {
     *     // ... data to create a Therapist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Therapist we want to update
     *   }
     * })
     */
    upsert<T extends TherapistUpsertArgs>(args: SelectSubset<T, TherapistUpsertArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Therapists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCountArgs} args - Arguments to filter Therapists to count.
     * @example
     * // Count the number of Therapists
     * const count = await prisma.therapist.count({
     *   where: {
     *     // ... the filter for the Therapists we want to count
     *   }
     * })
    **/
    count<T extends TherapistCountArgs>(
      args?: Subset<T, TherapistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Therapist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapistAggregateArgs>(args: Subset<T, TherapistAggregateArgs>): Prisma.PrismaPromise<GetTherapistAggregateType<T>>

    /**
     * Group by Therapist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistGroupByArgs['orderBy'] }
        : { orderBy?: TherapistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Therapist model
   */
  readonly fields: TherapistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Therapist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Therapist$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends Therapist$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchRequests<T extends Therapist$matchRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$matchRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Therapist model
   */
  interface TherapistFieldRefs {
    readonly id: FieldRef<"Therapist", 'String'>
    readonly name: FieldRef<"Therapist", 'String'>
    readonly email: FieldRef<"Therapist", 'String'>
    readonly specialty: FieldRef<"Therapist", 'String'>
    readonly experience: FieldRef<"Therapist", 'Int'>
    readonly bio: FieldRef<"Therapist", 'String'>
    readonly license: FieldRef<"Therapist", 'String'>
    readonly imageUrl: FieldRef<"Therapist", 'String'>
    readonly lat: FieldRef<"Therapist", 'Float'>
    readonly lng: FieldRef<"Therapist", 'Float'>
    readonly walletBalance: FieldRef<"Therapist", 'Int'>
    readonly createdAt: FieldRef<"Therapist", 'DateTime'>
    readonly updatedAt: FieldRef<"Therapist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Therapist findUnique
   */
  export type TherapistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist findUniqueOrThrow
   */
  export type TherapistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist findFirst
   */
  export type TherapistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapists.
     */
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist findFirstOrThrow
   */
  export type TherapistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapists.
     */
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist findMany
   */
  export type TherapistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter, which Therapists to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist create
   */
  export type TherapistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * The data needed to create a Therapist.
     */
    data: XOR<TherapistCreateInput, TherapistUncheckedCreateInput>
  }

  /**
   * Therapist createMany
   */
  export type TherapistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Therapists.
     */
    data: TherapistCreateManyInput | TherapistCreateManyInput[]
  }

  /**
   * Therapist createManyAndReturn
   */
  export type TherapistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The data used to create many Therapists.
     */
    data: TherapistCreateManyInput | TherapistCreateManyInput[]
  }

  /**
   * Therapist update
   */
  export type TherapistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * The data needed to update a Therapist.
     */
    data: XOR<TherapistUpdateInput, TherapistUncheckedUpdateInput>
    /**
     * Choose, which Therapist to update.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist updateMany
   */
  export type TherapistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Therapists.
     */
    data: XOR<TherapistUpdateManyMutationInput, TherapistUncheckedUpdateManyInput>
    /**
     * Filter which Therapists to update
     */
    where?: TherapistWhereInput
    /**
     * Limit how many Therapists to update.
     */
    limit?: number
  }

  /**
   * Therapist updateManyAndReturn
   */
  export type TherapistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The data used to update Therapists.
     */
    data: XOR<TherapistUpdateManyMutationInput, TherapistUncheckedUpdateManyInput>
    /**
     * Filter which Therapists to update
     */
    where?: TherapistWhereInput
    /**
     * Limit how many Therapists to update.
     */
    limit?: number
  }

  /**
   * Therapist upsert
   */
  export type TherapistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * The filter to search for the Therapist to update in case it exists.
     */
    where: TherapistWhereUniqueInput
    /**
     * In case the Therapist found by the `where` argument doesn't exist, create a new Therapist with this data.
     */
    create: XOR<TherapistCreateInput, TherapistUncheckedCreateInput>
    /**
     * In case the Therapist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistUpdateInput, TherapistUncheckedUpdateInput>
  }

  /**
   * Therapist delete
   */
  export type TherapistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
    /**
     * Filter which Therapist to delete.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist deleteMany
   */
  export type TherapistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapists to delete
     */
    where?: TherapistWhereInput
    /**
     * Limit how many Therapists to delete.
     */
    limit?: number
  }

  /**
   * Therapist.reservations
   */
  export type Therapist$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Therapist.chats
   */
  export type Therapist$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Therapist.matchRequests
   */
  export type Therapist$matchRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    where?: MatchRequestWhereInput
    orderBy?: MatchRequestOrderByWithRelationInput | MatchRequestOrderByWithRelationInput[]
    cursor?: MatchRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchRequestScalarFieldEnum | MatchRequestScalarFieldEnum[]
  }

  /**
   * Therapist without action
   */
  export type TherapistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    price: number | null
  }

  export type ReservationSumAggregateOutputType = {
    price: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    therapistId: string | null
    date: Date | null
    price: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    therapistId: string | null
    date: Date | null
    price: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    userId: number
    therapistId: number
    date: number
    price: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    price?: true
  }

  export type ReservationSumAggregateInputType = {
    price?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    date?: true
    price?: true
    status?: true
    createdAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    date?: true
    price?: true
    status?: true
    createdAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    date?: true
    price?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    userId: string
    therapistId: string
    date: Date
    price: number
    status: string
    createdAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    date?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    date?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    date?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    date?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "therapistId" | "date" | "price" | "status" | "createdAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      therapistId: string
      date: Date
      price: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly therapistId: FieldRef<"Reservation", 'String'>
    readonly date: FieldRef<"Reservation", 'DateTime'>
    readonly price: FieldRef<"Reservation", 'Int'>
    readonly status: FieldRef<"Reservation", 'String'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    userId: string | null
    therapistId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    therapistId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    therapistId: number
    message: number
    createdAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    message?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    message?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    therapistId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    userId: string
    therapistId: string
    message: string
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    therapistId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "therapistId" | "message" | "createdAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      therapistId: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly therapistId: FieldRef<"Chat", 'String'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model MatchRequest
   */

  export type AggregateMatchRequest = {
    _count: MatchRequestCountAggregateOutputType | null
    _min: MatchRequestMinAggregateOutputType | null
    _max: MatchRequestMaxAggregateOutputType | null
  }

  export type MatchRequestMinAggregateOutputType = {
    id: string | null
    therapistId: string | null
    userId: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
  }

  export type MatchRequestMaxAggregateOutputType = {
    id: string | null
    therapistId: string | null
    userId: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
  }

  export type MatchRequestCountAggregateOutputType = {
    id: number
    therapistId: number
    userId: number
    status: number
    message: number
    createdAt: number
    _all: number
  }


  export type MatchRequestMinAggregateInputType = {
    id?: true
    therapistId?: true
    userId?: true
    status?: true
    message?: true
    createdAt?: true
  }

  export type MatchRequestMaxAggregateInputType = {
    id?: true
    therapistId?: true
    userId?: true
    status?: true
    message?: true
    createdAt?: true
  }

  export type MatchRequestCountAggregateInputType = {
    id?: true
    therapistId?: true
    userId?: true
    status?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type MatchRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchRequest to aggregate.
     */
    where?: MatchRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchRequests to fetch.
     */
    orderBy?: MatchRequestOrderByWithRelationInput | MatchRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchRequests
    **/
    _count?: true | MatchRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchRequestMaxAggregateInputType
  }

  export type GetMatchRequestAggregateType<T extends MatchRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchRequest[P]>
      : GetScalarType<T[P], AggregateMatchRequest[P]>
  }




  export type MatchRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchRequestWhereInput
    orderBy?: MatchRequestOrderByWithAggregationInput | MatchRequestOrderByWithAggregationInput[]
    by: MatchRequestScalarFieldEnum[] | MatchRequestScalarFieldEnum
    having?: MatchRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchRequestCountAggregateInputType | true
    _min?: MatchRequestMinAggregateInputType
    _max?: MatchRequestMaxAggregateInputType
  }

  export type MatchRequestGroupByOutputType = {
    id: string
    therapistId: string
    userId: string
    status: string
    message: string | null
    createdAt: Date
    _count: MatchRequestCountAggregateOutputType | null
    _min: MatchRequestMinAggregateOutputType | null
    _max: MatchRequestMaxAggregateOutputType | null
  }

  type GetMatchRequestGroupByPayload<T extends MatchRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MatchRequestGroupByOutputType[P]>
        }
      >
    >


  export type MatchRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    userId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchRequest"]>

  export type MatchRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    userId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchRequest"]>

  export type MatchRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    userId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchRequest"]>

  export type MatchRequestSelectScalar = {
    id?: boolean
    therapistId?: boolean
    userId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type MatchRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "therapistId" | "userId" | "status" | "message" | "createdAt", ExtArgs["result"]["matchRequest"]>
  export type MatchRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchRequest"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapistId: string
      userId: string
      status: string
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["matchRequest"]>
    composites: {}
  }

  type MatchRequestGetPayload<S extends boolean | null | undefined | MatchRequestDefaultArgs> = $Result.GetResult<Prisma.$MatchRequestPayload, S>

  type MatchRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchRequestCountAggregateInputType | true
    }

  export interface MatchRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchRequest'], meta: { name: 'MatchRequest' } }
    /**
     * Find zero or one MatchRequest that matches the filter.
     * @param {MatchRequestFindUniqueArgs} args - Arguments to find a MatchRequest
     * @example
     * // Get one MatchRequest
     * const matchRequest = await prisma.matchRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchRequestFindUniqueArgs>(args: SelectSubset<T, MatchRequestFindUniqueArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchRequestFindUniqueOrThrowArgs} args - Arguments to find a MatchRequest
     * @example
     * // Get one MatchRequest
     * const matchRequest = await prisma.matchRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestFindFirstArgs} args - Arguments to find a MatchRequest
     * @example
     * // Get one MatchRequest
     * const matchRequest = await prisma.matchRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchRequestFindFirstArgs>(args?: SelectSubset<T, MatchRequestFindFirstArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestFindFirstOrThrowArgs} args - Arguments to find a MatchRequest
     * @example
     * // Get one MatchRequest
     * const matchRequest = await prisma.matchRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchRequests
     * const matchRequests = await prisma.matchRequest.findMany()
     * 
     * // Get first 10 MatchRequests
     * const matchRequests = await prisma.matchRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchRequestWithIdOnly = await prisma.matchRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchRequestFindManyArgs>(args?: SelectSubset<T, MatchRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchRequest.
     * @param {MatchRequestCreateArgs} args - Arguments to create a MatchRequest.
     * @example
     * // Create one MatchRequest
     * const MatchRequest = await prisma.matchRequest.create({
     *   data: {
     *     // ... data to create a MatchRequest
     *   }
     * })
     * 
     */
    create<T extends MatchRequestCreateArgs>(args: SelectSubset<T, MatchRequestCreateArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchRequests.
     * @param {MatchRequestCreateManyArgs} args - Arguments to create many MatchRequests.
     * @example
     * // Create many MatchRequests
     * const matchRequest = await prisma.matchRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchRequestCreateManyArgs>(args?: SelectSubset<T, MatchRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchRequests and returns the data saved in the database.
     * @param {MatchRequestCreateManyAndReturnArgs} args - Arguments to create many MatchRequests.
     * @example
     * // Create many MatchRequests
     * const matchRequest = await prisma.matchRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchRequests and only return the `id`
     * const matchRequestWithIdOnly = await prisma.matchRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchRequest.
     * @param {MatchRequestDeleteArgs} args - Arguments to delete one MatchRequest.
     * @example
     * // Delete one MatchRequest
     * const MatchRequest = await prisma.matchRequest.delete({
     *   where: {
     *     // ... filter to delete one MatchRequest
     *   }
     * })
     * 
     */
    delete<T extends MatchRequestDeleteArgs>(args: SelectSubset<T, MatchRequestDeleteArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchRequest.
     * @param {MatchRequestUpdateArgs} args - Arguments to update one MatchRequest.
     * @example
     * // Update one MatchRequest
     * const matchRequest = await prisma.matchRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchRequestUpdateArgs>(args: SelectSubset<T, MatchRequestUpdateArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchRequests.
     * @param {MatchRequestDeleteManyArgs} args - Arguments to filter MatchRequests to delete.
     * @example
     * // Delete a few MatchRequests
     * const { count } = await prisma.matchRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchRequestDeleteManyArgs>(args?: SelectSubset<T, MatchRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchRequests
     * const matchRequest = await prisma.matchRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchRequestUpdateManyArgs>(args: SelectSubset<T, MatchRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchRequests and returns the data updated in the database.
     * @param {MatchRequestUpdateManyAndReturnArgs} args - Arguments to update many MatchRequests.
     * @example
     * // Update many MatchRequests
     * const matchRequest = await prisma.matchRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchRequests and only return the `id`
     * const matchRequestWithIdOnly = await prisma.matchRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchRequest.
     * @param {MatchRequestUpsertArgs} args - Arguments to update or create a MatchRequest.
     * @example
     * // Update or create a MatchRequest
     * const matchRequest = await prisma.matchRequest.upsert({
     *   create: {
     *     // ... data to create a MatchRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchRequest we want to update
     *   }
     * })
     */
    upsert<T extends MatchRequestUpsertArgs>(args: SelectSubset<T, MatchRequestUpsertArgs<ExtArgs>>): Prisma__MatchRequestClient<$Result.GetResult<Prisma.$MatchRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestCountArgs} args - Arguments to filter MatchRequests to count.
     * @example
     * // Count the number of MatchRequests
     * const count = await prisma.matchRequest.count({
     *   where: {
     *     // ... the filter for the MatchRequests we want to count
     *   }
     * })
    **/
    count<T extends MatchRequestCountArgs>(
      args?: Subset<T, MatchRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchRequestAggregateArgs>(args: Subset<T, MatchRequestAggregateArgs>): Prisma.PrismaPromise<GetMatchRequestAggregateType<T>>

    /**
     * Group by MatchRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchRequestGroupByArgs['orderBy'] }
        : { orderBy?: MatchRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchRequest model
   */
  readonly fields: MatchRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchRequest model
   */
  interface MatchRequestFieldRefs {
    readonly id: FieldRef<"MatchRequest", 'String'>
    readonly therapistId: FieldRef<"MatchRequest", 'String'>
    readonly userId: FieldRef<"MatchRequest", 'String'>
    readonly status: FieldRef<"MatchRequest", 'String'>
    readonly message: FieldRef<"MatchRequest", 'String'>
    readonly createdAt: FieldRef<"MatchRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchRequest findUnique
   */
  export type MatchRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * Filter, which MatchRequest to fetch.
     */
    where: MatchRequestWhereUniqueInput
  }

  /**
   * MatchRequest findUniqueOrThrow
   */
  export type MatchRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * Filter, which MatchRequest to fetch.
     */
    where: MatchRequestWhereUniqueInput
  }

  /**
   * MatchRequest findFirst
   */
  export type MatchRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * Filter, which MatchRequest to fetch.
     */
    where?: MatchRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchRequests to fetch.
     */
    orderBy?: MatchRequestOrderByWithRelationInput | MatchRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchRequests.
     */
    cursor?: MatchRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchRequests.
     */
    distinct?: MatchRequestScalarFieldEnum | MatchRequestScalarFieldEnum[]
  }

  /**
   * MatchRequest findFirstOrThrow
   */
  export type MatchRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * Filter, which MatchRequest to fetch.
     */
    where?: MatchRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchRequests to fetch.
     */
    orderBy?: MatchRequestOrderByWithRelationInput | MatchRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchRequests.
     */
    cursor?: MatchRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchRequests.
     */
    distinct?: MatchRequestScalarFieldEnum | MatchRequestScalarFieldEnum[]
  }

  /**
   * MatchRequest findMany
   */
  export type MatchRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * Filter, which MatchRequests to fetch.
     */
    where?: MatchRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchRequests to fetch.
     */
    orderBy?: MatchRequestOrderByWithRelationInput | MatchRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchRequests.
     */
    cursor?: MatchRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchRequests.
     */
    skip?: number
    distinct?: MatchRequestScalarFieldEnum | MatchRequestScalarFieldEnum[]
  }

  /**
   * MatchRequest create
   */
  export type MatchRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchRequest.
     */
    data: XOR<MatchRequestCreateInput, MatchRequestUncheckedCreateInput>
  }

  /**
   * MatchRequest createMany
   */
  export type MatchRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchRequests.
     */
    data: MatchRequestCreateManyInput | MatchRequestCreateManyInput[]
  }

  /**
   * MatchRequest createManyAndReturn
   */
  export type MatchRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MatchRequests.
     */
    data: MatchRequestCreateManyInput | MatchRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchRequest update
   */
  export type MatchRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchRequest.
     */
    data: XOR<MatchRequestUpdateInput, MatchRequestUncheckedUpdateInput>
    /**
     * Choose, which MatchRequest to update.
     */
    where: MatchRequestWhereUniqueInput
  }

  /**
   * MatchRequest updateMany
   */
  export type MatchRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchRequests.
     */
    data: XOR<MatchRequestUpdateManyMutationInput, MatchRequestUncheckedUpdateManyInput>
    /**
     * Filter which MatchRequests to update
     */
    where?: MatchRequestWhereInput
    /**
     * Limit how many MatchRequests to update.
     */
    limit?: number
  }

  /**
   * MatchRequest updateManyAndReturn
   */
  export type MatchRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * The data used to update MatchRequests.
     */
    data: XOR<MatchRequestUpdateManyMutationInput, MatchRequestUncheckedUpdateManyInput>
    /**
     * Filter which MatchRequests to update
     */
    where?: MatchRequestWhereInput
    /**
     * Limit how many MatchRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchRequest upsert
   */
  export type MatchRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchRequest to update in case it exists.
     */
    where: MatchRequestWhereUniqueInput
    /**
     * In case the MatchRequest found by the `where` argument doesn't exist, create a new MatchRequest with this data.
     */
    create: XOR<MatchRequestCreateInput, MatchRequestUncheckedCreateInput>
    /**
     * In case the MatchRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchRequestUpdateInput, MatchRequestUncheckedUpdateInput>
  }

  /**
   * MatchRequest delete
   */
  export type MatchRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
    /**
     * Filter which MatchRequest to delete.
     */
    where: MatchRequestWhereUniqueInput
  }

  /**
   * MatchRequest deleteMany
   */
  export type MatchRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchRequests to delete
     */
    where?: MatchRequestWhereInput
    /**
     * Limit how many MatchRequests to delete.
     */
    limit?: number
  }

  /**
   * MatchRequest without action
   */
  export type MatchRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchRequest
     */
    select?: MatchRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchRequest
     */
    omit?: MatchRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    symptom: 'symptom',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TherapistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    specialty: 'specialty',
    experience: 'experience',
    bio: 'bio',
    license: 'license',
    imageUrl: 'imageUrl',
    lat: 'lat',
    lng: 'lng',
    walletBalance: 'walletBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapistScalarFieldEnum = (typeof TherapistScalarFieldEnum)[keyof typeof TherapistScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    therapistId: 'therapistId',
    date: 'date',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    therapistId: 'therapistId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MatchRequestScalarFieldEnum: {
    id: 'id',
    therapistId: 'therapistId',
    userId: 'userId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type MatchRequestScalarFieldEnum = (typeof MatchRequestScalarFieldEnum)[keyof typeof MatchRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    symptom?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    reservations?: ReservationListRelationFilter
    chats?: ChatListRelationFilter
    matchRequests?: MatchRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    symptom?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    matchRequests?: MatchRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    symptom?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    reservations?: ReservationListRelationFilter
    chats?: ChatListRelationFilter
    matchRequests?: MatchRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    symptom?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    symptom?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TherapistWhereInput = {
    AND?: TherapistWhereInput | TherapistWhereInput[]
    OR?: TherapistWhereInput[]
    NOT?: TherapistWhereInput | TherapistWhereInput[]
    id?: StringFilter<"Therapist"> | string
    name?: StringFilter<"Therapist"> | string
    email?: StringFilter<"Therapist"> | string
    specialty?: StringFilter<"Therapist"> | string
    experience?: IntFilter<"Therapist"> | number
    bio?: StringNullableFilter<"Therapist"> | string | null
    license?: StringNullableFilter<"Therapist"> | string | null
    imageUrl?: StringNullableFilter<"Therapist"> | string | null
    lat?: FloatFilter<"Therapist"> | number
    lng?: FloatFilter<"Therapist"> | number
    walletBalance?: IntFilter<"Therapist"> | number
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
    reservations?: ReservationListRelationFilter
    chats?: ChatListRelationFilter
    matchRequests?: MatchRequestListRelationFilter
  }

  export type TherapistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    license?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
    matchRequests?: MatchRequestOrderByRelationAggregateInput
  }

  export type TherapistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TherapistWhereInput | TherapistWhereInput[]
    OR?: TherapistWhereInput[]
    NOT?: TherapistWhereInput | TherapistWhereInput[]
    name?: StringFilter<"Therapist"> | string
    specialty?: StringFilter<"Therapist"> | string
    experience?: IntFilter<"Therapist"> | number
    bio?: StringNullableFilter<"Therapist"> | string | null
    license?: StringNullableFilter<"Therapist"> | string | null
    imageUrl?: StringNullableFilter<"Therapist"> | string | null
    lat?: FloatFilter<"Therapist"> | number
    lng?: FloatFilter<"Therapist"> | number
    walletBalance?: IntFilter<"Therapist"> | number
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
    reservations?: ReservationListRelationFilter
    chats?: ChatListRelationFilter
    matchRequests?: MatchRequestListRelationFilter
  }, "id" | "email">

  export type TherapistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    license?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TherapistCountOrderByAggregateInput
    _avg?: TherapistAvgOrderByAggregateInput
    _max?: TherapistMaxOrderByAggregateInput
    _min?: TherapistMinOrderByAggregateInput
    _sum?: TherapistSumOrderByAggregateInput
  }

  export type TherapistScalarWhereWithAggregatesInput = {
    AND?: TherapistScalarWhereWithAggregatesInput | TherapistScalarWhereWithAggregatesInput[]
    OR?: TherapistScalarWhereWithAggregatesInput[]
    NOT?: TherapistScalarWhereWithAggregatesInput | TherapistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Therapist"> | string
    name?: StringWithAggregatesFilter<"Therapist"> | string
    email?: StringWithAggregatesFilter<"Therapist"> | string
    specialty?: StringWithAggregatesFilter<"Therapist"> | string
    experience?: IntWithAggregatesFilter<"Therapist"> | number
    bio?: StringNullableWithAggregatesFilter<"Therapist"> | string | null
    license?: StringNullableWithAggregatesFilter<"Therapist"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Therapist"> | string | null
    lat?: FloatWithAggregatesFilter<"Therapist"> | number
    lng?: FloatWithAggregatesFilter<"Therapist"> | number
    walletBalance?: IntWithAggregatesFilter<"Therapist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    therapistId?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    price?: IntFilter<"Reservation"> | number
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    therapist?: TherapistOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    userId?: StringFilter<"Reservation"> | string
    therapistId?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    price?: IntFilter<"Reservation"> | number
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    therapistId?: StringWithAggregatesFilter<"Reservation"> | string
    date?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    price?: IntWithAggregatesFilter<"Reservation"> | number
    status?: StringWithAggregatesFilter<"Reservation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    userId?: StringFilter<"Chat"> | string
    therapistId?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    therapist?: TherapistOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringFilter<"Chat"> | string
    therapistId?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    userId?: StringWithAggregatesFilter<"Chat"> | string
    therapistId?: StringWithAggregatesFilter<"Chat"> | string
    message?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type MatchRequestWhereInput = {
    AND?: MatchRequestWhereInput | MatchRequestWhereInput[]
    OR?: MatchRequestWhereInput[]
    NOT?: MatchRequestWhereInput | MatchRequestWhereInput[]
    id?: StringFilter<"MatchRequest"> | string
    therapistId?: StringFilter<"MatchRequest"> | string
    userId?: StringFilter<"MatchRequest"> | string
    status?: StringFilter<"MatchRequest"> | string
    message?: StringNullableFilter<"MatchRequest"> | string | null
    createdAt?: DateTimeFilter<"MatchRequest"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchRequestOrderByWithRelationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MatchRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchRequestWhereInput | MatchRequestWhereInput[]
    OR?: MatchRequestWhereInput[]
    NOT?: MatchRequestWhereInput | MatchRequestWhereInput[]
    therapistId?: StringFilter<"MatchRequest"> | string
    userId?: StringFilter<"MatchRequest"> | string
    status?: StringFilter<"MatchRequest"> | string
    message?: StringNullableFilter<"MatchRequest"> | string | null
    createdAt?: DateTimeFilter<"MatchRequest"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchRequestOrderByWithAggregationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MatchRequestCountOrderByAggregateInput
    _max?: MatchRequestMaxOrderByAggregateInput
    _min?: MatchRequestMinOrderByAggregateInput
  }

  export type MatchRequestScalarWhereWithAggregatesInput = {
    AND?: MatchRequestScalarWhereWithAggregatesInput | MatchRequestScalarWhereWithAggregatesInput[]
    OR?: MatchRequestScalarWhereWithAggregatesInput[]
    NOT?: MatchRequestScalarWhereWithAggregatesInput | MatchRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchRequest"> | string
    therapistId?: StringWithAggregatesFilter<"MatchRequest"> | string
    userId?: StringWithAggregatesFilter<"MatchRequest"> | string
    status?: StringWithAggregatesFilter<"MatchRequest"> | string
    message?: StringNullableWithAggregatesFilter<"MatchRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUserInput
    matchRequests?: MatchRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    matchRequests?: MatchRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUserNestedInput
    matchRequests?: MatchRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    matchRequests?: MatchRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCreateInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutTherapistInput
    chats?: ChatCreateNestedManyWithoutTherapistInput
    matchRequests?: MatchRequestCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutTherapistInput
    chats?: ChatUncheckedCreateNestedManyWithoutTherapistInput
    matchRequests?: MatchRequestUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutTherapistNestedInput
    chats?: ChatUpdateManyWithoutTherapistNestedInput
    matchRequests?: MatchRequestUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutTherapistNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTherapistNestedInput
    matchRequests?: MatchRequestUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateManyInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    therapist: TherapistCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    userId: string
    therapistId: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    therapist?: TherapistUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    userId: string
    therapistId: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
    therapist: TherapistCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    userId: string
    therapistId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
    therapist?: TherapistUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyInput = {
    id?: number
    userId: string
    therapistId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestCreateInput = {
    id?: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutMatchRequestsInput
    user: UserCreateNestedOneWithoutMatchRequestsInput
  }

  export type MatchRequestUncheckedCreateInput = {
    id?: string
    therapistId: string
    userId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
  }

  export type MatchRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutMatchRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutMatchRequestsNestedInput
  }

  export type MatchRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestCreateManyInput = {
    id?: string
    therapistId: string
    userId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
  }

  export type MatchRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MatchRequestListRelationFilter = {
    every?: MatchRequestWhereInput
    some?: MatchRequestWhereInput
    none?: MatchRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    symptom?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    symptom?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    symptom?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TherapistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    license?: SortOrder
    imageUrl?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistAvgOrderByAggregateInput = {
    experience?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
  }

  export type TherapistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    license?: SortOrder
    imageUrl?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    license?: SortOrder
    imageUrl?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistSumOrderByAggregateInput = {
    experience?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    walletBalance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TherapistScalarRelationFilter = {
    is?: TherapistWhereInput
    isNot?: TherapistWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    therapistId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MatchRequestCountOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchRequestMinOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MatchRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchRequestCreateWithoutUserInput, MatchRequestUncheckedCreateWithoutUserInput> | MatchRequestCreateWithoutUserInput[] | MatchRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutUserInput | MatchRequestCreateOrConnectWithoutUserInput[]
    createMany?: MatchRequestCreateManyUserInputEnvelope
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MatchRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchRequestCreateWithoutUserInput, MatchRequestUncheckedCreateWithoutUserInput> | MatchRequestCreateWithoutUserInput[] | MatchRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutUserInput | MatchRequestCreateOrConnectWithoutUserInput[]
    createMany?: MatchRequestCreateManyUserInputEnvelope
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MatchRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchRequestCreateWithoutUserInput, MatchRequestUncheckedCreateWithoutUserInput> | MatchRequestCreateWithoutUserInput[] | MatchRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutUserInput | MatchRequestCreateOrConnectWithoutUserInput[]
    upsert?: MatchRequestUpsertWithWhereUniqueWithoutUserInput | MatchRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchRequestCreateManyUserInputEnvelope
    set?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    disconnect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    delete?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    update?: MatchRequestUpdateWithWhereUniqueWithoutUserInput | MatchRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchRequestUpdateManyWithWhereWithoutUserInput | MatchRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchRequestScalarWhereInput | MatchRequestScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MatchRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchRequestCreateWithoutUserInput, MatchRequestUncheckedCreateWithoutUserInput> | MatchRequestCreateWithoutUserInput[] | MatchRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutUserInput | MatchRequestCreateOrConnectWithoutUserInput[]
    upsert?: MatchRequestUpsertWithWhereUniqueWithoutUserInput | MatchRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchRequestCreateManyUserInputEnvelope
    set?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    disconnect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    delete?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    update?: MatchRequestUpdateWithWhereUniqueWithoutUserInput | MatchRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchRequestUpdateManyWithWhereWithoutUserInput | MatchRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchRequestScalarWhereInput | MatchRequestScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutTherapistInput = {
    create?: XOR<ReservationCreateWithoutTherapistInput, ReservationUncheckedCreateWithoutTherapistInput> | ReservationCreateWithoutTherapistInput[] | ReservationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTherapistInput | ReservationCreateOrConnectWithoutTherapistInput[]
    createMany?: ReservationCreateManyTherapistInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutTherapistInput = {
    create?: XOR<ChatCreateWithoutTherapistInput, ChatUncheckedCreateWithoutTherapistInput> | ChatCreateWithoutTherapistInput[] | ChatUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTherapistInput | ChatCreateOrConnectWithoutTherapistInput[]
    createMany?: ChatCreateManyTherapistInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MatchRequestCreateNestedManyWithoutTherapistInput = {
    create?: XOR<MatchRequestCreateWithoutTherapistInput, MatchRequestUncheckedCreateWithoutTherapistInput> | MatchRequestCreateWithoutTherapistInput[] | MatchRequestUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutTherapistInput | MatchRequestCreateOrConnectWithoutTherapistInput[]
    createMany?: MatchRequestCreateManyTherapistInputEnvelope
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<ReservationCreateWithoutTherapistInput, ReservationUncheckedCreateWithoutTherapistInput> | ReservationCreateWithoutTherapistInput[] | ReservationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTherapistInput | ReservationCreateOrConnectWithoutTherapistInput[]
    createMany?: ReservationCreateManyTherapistInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<ChatCreateWithoutTherapistInput, ChatUncheckedCreateWithoutTherapistInput> | ChatCreateWithoutTherapistInput[] | ChatUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTherapistInput | ChatCreateOrConnectWithoutTherapistInput[]
    createMany?: ChatCreateManyTherapistInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MatchRequestUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<MatchRequestCreateWithoutTherapistInput, MatchRequestUncheckedCreateWithoutTherapistInput> | MatchRequestCreateWithoutTherapistInput[] | MatchRequestUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutTherapistInput | MatchRequestCreateOrConnectWithoutTherapistInput[]
    createMany?: MatchRequestCreateManyTherapistInputEnvelope
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<ReservationCreateWithoutTherapistInput, ReservationUncheckedCreateWithoutTherapistInput> | ReservationCreateWithoutTherapistInput[] | ReservationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTherapistInput | ReservationCreateOrConnectWithoutTherapistInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTherapistInput | ReservationUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: ReservationCreateManyTherapistInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTherapistInput | ReservationUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTherapistInput | ReservationUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<ChatCreateWithoutTherapistInput, ChatUncheckedCreateWithoutTherapistInput> | ChatCreateWithoutTherapistInput[] | ChatUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTherapistInput | ChatCreateOrConnectWithoutTherapistInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutTherapistInput | ChatUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: ChatCreateManyTherapistInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutTherapistInput | ChatUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutTherapistInput | ChatUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MatchRequestUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<MatchRequestCreateWithoutTherapistInput, MatchRequestUncheckedCreateWithoutTherapistInput> | MatchRequestCreateWithoutTherapistInput[] | MatchRequestUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutTherapistInput | MatchRequestCreateOrConnectWithoutTherapistInput[]
    upsert?: MatchRequestUpsertWithWhereUniqueWithoutTherapistInput | MatchRequestUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: MatchRequestCreateManyTherapistInputEnvelope
    set?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    disconnect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    delete?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    update?: MatchRequestUpdateWithWhereUniqueWithoutTherapistInput | MatchRequestUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: MatchRequestUpdateManyWithWhereWithoutTherapistInput | MatchRequestUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: MatchRequestScalarWhereInput | MatchRequestScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<ReservationCreateWithoutTherapistInput, ReservationUncheckedCreateWithoutTherapistInput> | ReservationCreateWithoutTherapistInput[] | ReservationUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTherapistInput | ReservationCreateOrConnectWithoutTherapistInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTherapistInput | ReservationUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: ReservationCreateManyTherapistInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTherapistInput | ReservationUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTherapistInput | ReservationUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<ChatCreateWithoutTherapistInput, ChatUncheckedCreateWithoutTherapistInput> | ChatCreateWithoutTherapistInput[] | ChatUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutTherapistInput | ChatCreateOrConnectWithoutTherapistInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutTherapistInput | ChatUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: ChatCreateManyTherapistInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutTherapistInput | ChatUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutTherapistInput | ChatUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MatchRequestUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<MatchRequestCreateWithoutTherapistInput, MatchRequestUncheckedCreateWithoutTherapistInput> | MatchRequestCreateWithoutTherapistInput[] | MatchRequestUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: MatchRequestCreateOrConnectWithoutTherapistInput | MatchRequestCreateOrConnectWithoutTherapistInput[]
    upsert?: MatchRequestUpsertWithWhereUniqueWithoutTherapistInput | MatchRequestUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: MatchRequestCreateManyTherapistInputEnvelope
    set?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    disconnect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    delete?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    connect?: MatchRequestWhereUniqueInput | MatchRequestWhereUniqueInput[]
    update?: MatchRequestUpdateWithWhereUniqueWithoutTherapistInput | MatchRequestUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: MatchRequestUpdateManyWithWhereWithoutTherapistInput | MatchRequestUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: MatchRequestScalarWhereInput | MatchRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistCreateNestedOneWithoutReservationsInput = {
    create?: XOR<TherapistCreateWithoutReservationsInput, TherapistUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutReservationsInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type TherapistUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<TherapistCreateWithoutReservationsInput, TherapistUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutReservationsInput
    upsert?: TherapistUpsertWithoutReservationsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutReservationsInput, TherapistUpdateWithoutReservationsInput>, TherapistUncheckedUpdateWithoutReservationsInput>
  }

  export type UserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistCreateNestedOneWithoutChatsInput = {
    create?: XOR<TherapistCreateWithoutChatsInput, TherapistUncheckedCreateWithoutChatsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutChatsInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    upsert?: UserUpsertWithoutChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsInput, UserUpdateWithoutChatsInput>, UserUncheckedUpdateWithoutChatsInput>
  }

  export type TherapistUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<TherapistCreateWithoutChatsInput, TherapistUncheckedCreateWithoutChatsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutChatsInput
    upsert?: TherapistUpsertWithoutChatsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutChatsInput, TherapistUpdateWithoutChatsInput>, TherapistUncheckedUpdateWithoutChatsInput>
  }

  export type TherapistCreateNestedOneWithoutMatchRequestsInput = {
    create?: XOR<TherapistCreateWithoutMatchRequestsInput, TherapistUncheckedCreateWithoutMatchRequestsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutMatchRequestsInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchRequestsInput = {
    create?: XOR<UserCreateWithoutMatchRequestsInput, UserUncheckedCreateWithoutMatchRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type TherapistUpdateOneRequiredWithoutMatchRequestsNestedInput = {
    create?: XOR<TherapistCreateWithoutMatchRequestsInput, TherapistUncheckedCreateWithoutMatchRequestsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutMatchRequestsInput
    upsert?: TherapistUpsertWithoutMatchRequestsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutMatchRequestsInput, TherapistUpdateWithoutMatchRequestsInput>, TherapistUncheckedUpdateWithoutMatchRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutMatchRequestsNestedInput = {
    create?: XOR<UserCreateWithoutMatchRequestsInput, UserUncheckedCreateWithoutMatchRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchRequestsInput
    upsert?: UserUpsertWithoutMatchRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchRequestsInput, UserUpdateWithoutMatchRequestsInput>, UserUncheckedUpdateWithoutMatchRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ReservationCreateWithoutUserInput = {
    id?: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    id?: string
    therapistId: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
  }

  export type ChatCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutUserInput = {
    id?: number
    therapistId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatCreateManyUserInputEnvelope = {
    data: ChatCreateManyUserInput | ChatCreateManyUserInput[]
  }

  export type MatchRequestCreateWithoutUserInput = {
    id?: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutMatchRequestsInput
  }

  export type MatchRequestUncheckedCreateWithoutUserInput = {
    id?: string
    therapistId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
  }

  export type MatchRequestCreateOrConnectWithoutUserInput = {
    where: MatchRequestWhereUniqueInput
    create: XOR<MatchRequestCreateWithoutUserInput, MatchRequestUncheckedCreateWithoutUserInput>
  }

  export type MatchRequestCreateManyUserInputEnvelope = {
    data: MatchRequestCreateManyUserInput | MatchRequestCreateManyUserInput[]
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    therapistId?: StringFilter<"Reservation"> | string
    date?: DateTimeFilter<"Reservation"> | Date | string
    price?: IntFilter<"Reservation"> | number
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    userId?: StringFilter<"Chat"> | string
    therapistId?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type MatchRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchRequestWhereUniqueInput
    update: XOR<MatchRequestUpdateWithoutUserInput, MatchRequestUncheckedUpdateWithoutUserInput>
    create: XOR<MatchRequestCreateWithoutUserInput, MatchRequestUncheckedCreateWithoutUserInput>
  }

  export type MatchRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchRequestWhereUniqueInput
    data: XOR<MatchRequestUpdateWithoutUserInput, MatchRequestUncheckedUpdateWithoutUserInput>
  }

  export type MatchRequestUpdateManyWithWhereWithoutUserInput = {
    where: MatchRequestScalarWhereInput
    data: XOR<MatchRequestUpdateManyMutationInput, MatchRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchRequestScalarWhereInput = {
    AND?: MatchRequestScalarWhereInput | MatchRequestScalarWhereInput[]
    OR?: MatchRequestScalarWhereInput[]
    NOT?: MatchRequestScalarWhereInput | MatchRequestScalarWhereInput[]
    id?: StringFilter<"MatchRequest"> | string
    therapistId?: StringFilter<"MatchRequest"> | string
    userId?: StringFilter<"MatchRequest"> | string
    status?: StringFilter<"MatchRequest"> | string
    message?: StringNullableFilter<"MatchRequest"> | string | null
    createdAt?: DateTimeFilter<"MatchRequest"> | Date | string
  }

  export type ReservationCreateWithoutTherapistInput = {
    id?: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutTherapistInput = {
    id?: string
    userId: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutTherapistInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTherapistInput, ReservationUncheckedCreateWithoutTherapistInput>
  }

  export type ReservationCreateManyTherapistInputEnvelope = {
    data: ReservationCreateManyTherapistInput | ReservationCreateManyTherapistInput[]
  }

  export type ChatCreateWithoutTherapistInput = {
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutTherapistInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutTherapistInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutTherapistInput, ChatUncheckedCreateWithoutTherapistInput>
  }

  export type ChatCreateManyTherapistInputEnvelope = {
    data: ChatCreateManyTherapistInput | ChatCreateManyTherapistInput[]
  }

  export type MatchRequestCreateWithoutTherapistInput = {
    id?: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMatchRequestsInput
  }

  export type MatchRequestUncheckedCreateWithoutTherapistInput = {
    id?: string
    userId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
  }

  export type MatchRequestCreateOrConnectWithoutTherapistInput = {
    where: MatchRequestWhereUniqueInput
    create: XOR<MatchRequestCreateWithoutTherapistInput, MatchRequestUncheckedCreateWithoutTherapistInput>
  }

  export type MatchRequestCreateManyTherapistInputEnvelope = {
    data: MatchRequestCreateManyTherapistInput | MatchRequestCreateManyTherapistInput[]
  }

  export type ReservationUpsertWithWhereUniqueWithoutTherapistInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutTherapistInput, ReservationUncheckedUpdateWithoutTherapistInput>
    create: XOR<ReservationCreateWithoutTherapistInput, ReservationUncheckedCreateWithoutTherapistInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutTherapistInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutTherapistInput, ReservationUncheckedUpdateWithoutTherapistInput>
  }

  export type ReservationUpdateManyWithWhereWithoutTherapistInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutTherapistInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutTherapistInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutTherapistInput, ChatUncheckedUpdateWithoutTherapistInput>
    create: XOR<ChatCreateWithoutTherapistInput, ChatUncheckedCreateWithoutTherapistInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutTherapistInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutTherapistInput, ChatUncheckedUpdateWithoutTherapistInput>
  }

  export type ChatUpdateManyWithWhereWithoutTherapistInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutTherapistInput>
  }

  export type MatchRequestUpsertWithWhereUniqueWithoutTherapistInput = {
    where: MatchRequestWhereUniqueInput
    update: XOR<MatchRequestUpdateWithoutTherapistInput, MatchRequestUncheckedUpdateWithoutTherapistInput>
    create: XOR<MatchRequestCreateWithoutTherapistInput, MatchRequestUncheckedCreateWithoutTherapistInput>
  }

  export type MatchRequestUpdateWithWhereUniqueWithoutTherapistInput = {
    where: MatchRequestWhereUniqueInput
    data: XOR<MatchRequestUpdateWithoutTherapistInput, MatchRequestUncheckedUpdateWithoutTherapistInput>
  }

  export type MatchRequestUpdateManyWithWhereWithoutTherapistInput = {
    where: MatchRequestScalarWhereInput
    data: XOR<MatchRequestUpdateManyMutationInput, MatchRequestUncheckedUpdateManyWithoutTherapistInput>
  }

  export type UserCreateWithoutReservationsInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUserInput
    matchRequests?: MatchRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    matchRequests?: MatchRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type TherapistCreateWithoutReservationsInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutTherapistInput
    matchRequests?: MatchRequestCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutTherapistInput
    matchRequests?: MatchRequestUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutReservationsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutReservationsInput, TherapistUncheckedCreateWithoutReservationsInput>
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUserNestedInput
    matchRequests?: MatchRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    matchRequests?: MatchRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TherapistUpsertWithoutReservationsInput = {
    update: XOR<TherapistUpdateWithoutReservationsInput, TherapistUncheckedUpdateWithoutReservationsInput>
    create: XOR<TherapistCreateWithoutReservationsInput, TherapistUncheckedCreateWithoutReservationsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutReservationsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutReservationsInput, TherapistUncheckedUpdateWithoutReservationsInput>
  }

  export type TherapistUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutTherapistNestedInput
    matchRequests?: MatchRequestUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutTherapistNestedInput
    matchRequests?: MatchRequestUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type UserCreateWithoutChatsInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutUserInput
    matchRequests?: MatchRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    matchRequests?: MatchRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type TherapistCreateWithoutChatsInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutTherapistInput
    matchRequests?: MatchRequestCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutChatsInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutTherapistInput
    matchRequests?: MatchRequestUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutChatsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutChatsInput, TherapistUncheckedCreateWithoutChatsInput>
  }

  export type UserUpsertWithoutChatsInput = {
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    matchRequests?: MatchRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    matchRequests?: MatchRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TherapistUpsertWithoutChatsInput = {
    update: XOR<TherapistUpdateWithoutChatsInput, TherapistUncheckedUpdateWithoutChatsInput>
    create: XOR<TherapistCreateWithoutChatsInput, TherapistUncheckedCreateWithoutChatsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutChatsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutChatsInput, TherapistUncheckedUpdateWithoutChatsInput>
  }

  export type TherapistUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutTherapistNestedInput
    matchRequests?: MatchRequestUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutTherapistNestedInput
    matchRequests?: MatchRequestUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateWithoutMatchRequestsInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutTherapistInput
    chats?: ChatCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutMatchRequestsInput = {
    id?: string
    name: string
    email: string
    specialty: string
    experience?: number
    bio?: string | null
    license?: string | null
    imageUrl?: string | null
    lat: number
    lng: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutTherapistInput
    chats?: ChatUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutMatchRequestsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutMatchRequestsInput, TherapistUncheckedCreateWithoutMatchRequestsInput>
  }

  export type UserCreateWithoutMatchRequestsInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutUserInput
    chats?: ChatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchRequestsInput = {
    id?: string
    name: string
    email: string
    symptom?: string | null
    createdAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchRequestsInput, UserUncheckedCreateWithoutMatchRequestsInput>
  }

  export type TherapistUpsertWithoutMatchRequestsInput = {
    update: XOR<TherapistUpdateWithoutMatchRequestsInput, TherapistUncheckedUpdateWithoutMatchRequestsInput>
    create: XOR<TherapistCreateWithoutMatchRequestsInput, TherapistUncheckedCreateWithoutMatchRequestsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutMatchRequestsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutMatchRequestsInput, TherapistUncheckedUpdateWithoutMatchRequestsInput>
  }

  export type TherapistUpdateWithoutMatchRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutTherapistNestedInput
    chats?: ChatUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutMatchRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    walletBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutTherapistNestedInput
    chats?: ChatUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type UserUpsertWithoutMatchRequestsInput = {
    update: XOR<UserUpdateWithoutMatchRequestsInput, UserUncheckedUpdateWithoutMatchRequestsInput>
    create: XOR<UserCreateWithoutMatchRequestsInput, UserUncheckedCreateWithoutMatchRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchRequestsInput, UserUncheckedUpdateWithoutMatchRequestsInput>
  }

  export type UserUpdateWithoutMatchRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    chats?: ChatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    symptom?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationCreateManyUserInput = {
    id?: string
    therapistId: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
  }

  export type ChatCreateManyUserInput = {
    id?: number
    therapistId: string
    message: string
    createdAt?: Date | string
  }

  export type MatchRequestCreateManyUserInput = {
    id?: string
    therapistId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
  }

  export type ReservationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    therapistId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    therapistId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutMatchRequestsNestedInput
  }

  export type MatchRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyTherapistInput = {
    id?: string
    userId: string
    date: Date | string
    price: number
    status?: string
    createdAt?: Date | string
  }

  export type ChatCreateManyTherapistInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
  }

  export type MatchRequestCreateManyTherapistInput = {
    id?: string
    userId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
  }

  export type ReservationUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutTherapistInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutTherapistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutTherapistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchRequestsNestedInput
  }

  export type MatchRequestUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchRequestUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}