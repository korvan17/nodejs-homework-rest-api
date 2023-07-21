// const ServerResponse {
//   _events: [Object: null prototype] {
//     finish: [ [Function: bound resOnFinish], [Function: onevent] ],
//     end: [Function: onevent],
//   },
//   _eventsCount: 2,
//   _maxListeners: undefined,
//   outputData: [],
//   outputSize: 0,
//   writable: true,
//   destroyed: false,
//   _last: false,
//   chunkedEncoding: false,
//   shouldKeepAlive: true,
//   maxRequestsOnConnectionReached: false,
//   _defaultKeepAlive: true,
//   useChunkedEncodingByDefault: true,
//   sendDate: true,
//   _removedConnection: false,
//   _removedContLen: false,
//   _removedTE: false,
//   strictContentLength: false,
//   _contentLength: null,
//   _hasBody: true,
//   _trailer: '',
//   finished: false,
//   _headerSent: false,
//   _closed: false,
//   socket: <ref *1> Socket {
//     connecting: false,
//     _hadError: false,
//     _parent: null,
//     _host: null,
//     _closeAfterHandlingError: false,
//     _readableState: ReadableState {
//       objectMode: false,
//       highWaterMark: 16384,
//       buffer: BufferList { head: null, tail: null, length: 0 },
//       length: 0,
//       pipes: [],
//       flowing: true,
//       ended: false,
//       endEmitted: false,
//       reading: true,
//       constructed: true,
//       sync: false,
//       needReadable: true,
//       emittedReadable: false,
//       readableListening: false,
//       resumeScheduled: false,
//       errorEmitted: false,
//       emitClose: false,
//       autoDestroy: true,
//       destroyed: false,
//       errored: null,
//       closed: false,
//       closeEmitted: false,
//       defaultEncoding: 'utf8',
//       awaitDrainWriters: null,
//       multiAwaitDrain: false,
//       readingMore: false,
//       dataEmitted: false,
//       decoder: null,
//       encoding: null,
//       [Symbol(kPaused)]: false
//     },
//     _events: [Object: null prototype] {
//       end: [Array],
//       timeout: [Function: socketOnTimeout],
//       data: [Function: bound socketOnData],
//       error: [Array],
//       close: [Array],
//       drain: [Function: bound socketOnDrain],
//       resume: [Function: onSocketResume],
//       pause: [Function: onSocketPause]
//     },
//     _eventsCount: 8,
//     _maxListeners: undefined,
//     _writableState: WritableState {
//       objectMode: false,
//       highWaterMark: 16384,
//       finalCalled: false,
//       needDrain: false,
//       ending: false,
//       ended: false,
//       finished: false,
//       destroyed: false,
//       decodeStrings: false,
//       defaultEncoding: 'utf8',
//       length: 0,
//       writing: false,
//       corked: 0,
//       sync: true,
//       bufferProcessing: false,
//       onwrite: [Function: bound onwrite],
//       writecb: null,
//       writelen: 0,
//       afterWriteTickInfo: null,
//       buffered: [],
//       bufferedIndex: 0,
//       allBuffers: true,
//       allNoop: true,
//       pendingcb: 0,
//       constructed: true,
//       prefinished: false,
//       errorEmitted: false,
//       emitClose: false,
//       autoDestroy: true,
//       errored: null,
//       closed: false,
//       closeEmitted: false,
//       [Symbol(kOnFinished)]: []
//     },
//     allowHalfOpen: true,
//     _sockname: null,
//     _pendingData: null,
//     _pendingEncoding: '',
//     server: Server {
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       requestTimeout: 300000,
//       headersTimeout: 60000,
//       keepAliveTimeout: 5000,
//       connectionsCheckingInterval: 30000,
//       joinDuplicateHeaders: undefined,
//       _events: [Object: null prototype],
//       _eventsCount: 2,
//       _maxListeners: undefined,
//       _connections: 1,
//       _handle: [TCP],
//       _usingWorkers: false,
//       _workers: [],
//       _unref: false,
//       allowHalfOpen: true,
//       pauseOnConnect: false,
//       noDelay: true,
//       keepAlive: false,
//       keepAliveInitialDelay: 0,
//       httpAllowHalfOpen: false,
//       timeout: 0,
//       maxHeadersCount: null,
//       maxRequestsPerSocket: 0,
//       _connectionKey: '6::::3000',
//       [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//       [Symbol(ServerResponse)]: [Function: ServerResponse],
//       [Symbol(kCapture)]: false,
//       [Symbol(async_id_symbol)]: 159,
//       [Symbol(http.server.connections)]: ConnectionsList {},
//       [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//         _idleTimeout: 30000,
//         _idlePrev: [TimersList],
//         _idleNext: [TimersList],
//         _idleStart: 1053,
//         _onTimeout: [Function: bound checkConnections],
//         _timerArgs: undefined,
//         _repeat: 30000,
//         _destroyed: false,
//         [Symbol(refed)]: false,
//         [Symbol(kHasPrimitive)]: false,
//         [Symbol(asyncId)]: 158,
//         [Symbol(triggerId)]: 0
//       },
//       [Symbol(kUniqueHeaders)]: null
//     },
//     _server: Server {
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       requestTimeout: 300000,
//       headersTimeout: 60000,
//       keepAliveTimeout: 5000,
//       connectionsCheckingInterval: 30000,
//       joinDuplicateHeaders: undefined,
//       _events: [Object: null prototype],
//       _eventsCount: 2,
//       _maxListeners: undefined,
//       _connections: 1,
//       _handle: [TCP],
//       _usingWorkers: false,
//       _workers: [],
//       _unref: false,
//       allowHalfOpen: true,
//       pauseOnConnect: false,
//       noDelay: true,
//       keepAlive: false,
//       keepAliveInitialDelay: 0,
//       httpAllowHalfOpen: false,
//       timeout: 0,
//       maxHeadersCount: null,
//       maxRequestsPerSocket: 0,
//       _connectionKey: '6::::3000',
//       [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//       [Symbol(ServerResponse)]: [Function: ServerResponse],
//       [Symbol(kCapture)]: false,
//       [Symbol(async_id_symbol)]: 159,
//       [Symbol(http.server.connections)]: ConnectionsList {},
//       [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//         _idleTimeout: 30000,
//         _idlePrev: [TimersList],
//         _idleNext: [TimersList],
//         _idleStart: 1053,
//         _onTimeout: [Function: bound checkConnections],
//         _timerArgs: undefined,
//         _repeat: 30000,
//         _destroyed: false,
//         [Symbol(refed)]: false,
//         [Symbol(kHasPrimitive)]: false,
//         [Symbol(asyncId)]: 158,
//         [Symbol(triggerId)]: 0
//       },
//       [Symbol(kUniqueHeaders)]: null
//     },
//     parser: HTTPParser {
//       '0': null,
//       '1': [Function: parserOnHeaders],
//       '2': [Function: parserOnHeadersComplete],
//       '3': [Function: parserOnBody],
//       '4': [Function: parserOnMessageComplete],
//       '5': [Function: bound onParserExecute],
//       '6': [Function: bound onParserTimeout],
//       _headers: [],
//       _url: '',
//       socket: [Circular *1],
//       incoming: [IncomingMessage],
//       outgoing: null,
//       maxHeaderPairs: 2000,
//       _consumed: true,
//       onIncoming: [Function: bound parserOnIncoming],
//       [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
//     },
//     on: [Function: socketListenerWrap],
//     addListener: [Function: socketListenerWrap],
//     prependListener: [Function: socketListenerWrap],
//     setEncoding: [Function: socketSetEncoding],
//     _paused: false,
//     _httpMessage: [Circular *2],
//     _peername: { address: '::1', family: 'IPv6', port: 53664 },
//     [Symbol(async_id_symbol)]: 190,
//     [Symbol(kHandle)]: TCP {
//       reading: true,
//       onconnection: null,
//       _consumed: true,
//       [Symbol(owner_symbol)]: [Circular *1]
//     },
//     [Symbol(lastWriteQueueSize)]: 0,
//     [Symbol(timeout)]: null,
//     [Symbol(kBuffer)]: null,
//     [Symbol(kBufferCb)]: null,
//     [Symbol(kBufferGen)]: null,
//     [Symbol(kCapture)]: false,
//     [Symbol(kSetNoDelay)]: true,
//     [Symbol(kSetKeepAlive)]: false,
//     [Symbol(kSetKeepAliveInitialDelay)]: 0,
//     [Symbol(kBytesRead)]: 0,
//     [Symbol(kBytesWritten)]: 0
//   },
//   _header: null,
//   _keepAliveTimeout: 5000,
//   _onPendingData: [Function: bound updateOutgoingData],
//   req: IncomingMessage {
//     _readableState: ReadableState {
//       objectMode: false,
//       highWaterMark: 16384,
//       buffer: BufferList { head: null, tail: null, length: 0 },
//       length: 0,
//       pipes: [],
//       flowing: true,
//       ended: true,
//       endEmitted: true,
//       reading: false,
//       constructed: true,
//       sync: false,
//       needReadable: false,
//       emittedReadable: false,
//       readableListening: false,
//       resumeScheduled: false,
//       errorEmitted: false,
//       emitClose: true,
//       autoDestroy: true,
//       destroyed: true,
//       errored: null,
//       closed: true,
//       closeEmitted: true,
//       defaultEncoding: 'utf8',
//       awaitDrainWriters: null,
//       multiAwaitDrain: false,
//       readingMore: false,
//       dataEmitted: true,
//       decoder: null,
//       encoding: null,
//       [Symbol(kPaused)]: false
//     },
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     socket: <ref *1> Socket {
//       connecting: false,
//       _hadError: false,
//       _parent: null,
//       _host: null,
//       _closeAfterHandlingError: false,
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 8,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: true,
//       _sockname: null,
//       _pendingData: null,
//       _pendingEncoding: '',
//       server: [Server],
//       _server: [Server],
//       parser: [HTTPParser],
//       on: [Function: socketListenerWrap],
//       addListener: [Function: socketListenerWrap],
//       prependListener: [Function: socketListenerWrap],
//       setEncoding: [Function: socketSetEncoding],
//       _paused: false,
//       _httpMessage: [Circular *2],
//       _peername: [Object],
//       [Symbol(async_id_symbol)]: 190,
//       [Symbol(kHandle)]: [TCP],
//       [Symbol(lastWriteQueueSize)]: 0,
//       [Symbol(timeout)]: null,
//       [Symbol(kBuffer)]: null,
//       [Symbol(kBufferCb)]: null,
//       [Symbol(kBufferGen)]: null,
//       [Symbol(kCapture)]: false,
//       [Symbol(kSetNoDelay)]: true,
//       [Symbol(kSetKeepAlive)]: false,
//       [Symbol(kSetKeepAliveInitialDelay)]: 0,
//       [Symbol(kBytesRead)]: 0,
//       [Symbol(kBytesWritten)]: 0
//     },
//     httpVersionMajor: 1,
//     httpVersionMinor: 1,
//     httpVersion: '1.1',
//     complete: true,
//     rawHeaders: [
//       'Content-Type',
//       'application/json',
//       'User-Agent',
//       'PostmanRuntime/7.32.3',
//       'Accept',
//       '*/*',
//       'Postman-Token',
//       '167472ba-f2b8-4d37-acb9-3e2fa54c8cd6',
//       'Host',
//       'localhost:3000',
//       'Accept-Encoding',
//       'gzip, deflate, br',
//       'Connection',
//       'keep-alive',
//       'Content-Length',
//       '27'
//     ],
//     rawTrailers: [],
//     joinDuplicateHeaders: undefined,
//     aborted: false,
//     upgrade: false,
//     url: '/api/contacts/64b6cff2f0ed4f16df46e64',
//     method: 'GET',
//     statusCode: null,
//     statusMessage: null,
//     client: <ref *1> Socket {
//       connecting: false,
//       _hadError: false,
//       _parent: null,
//       _host: null,
//       _closeAfterHandlingError: false,
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 8,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: true,
//       _sockname: null,
//       _pendingData: null,
//       _pendingEncoding: '',
//       server: [Server],
//       _server: [Server],
//       parser: [HTTPParser],
//       on: [Function: socketListenerWrap],
//       addListener: [Function: socketListenerWrap],
//       prependListener: [Function: socketListenerWrap],
//       setEncoding: [Function: socketSetEncoding],
//       _paused: false,
//       _httpMessage: [Circular *2],
//       _peername: [Object],
//       [Symbol(async_id_symbol)]: 190,
//       [Symbol(kHandle)]: [TCP],
//       [Symbol(lastWriteQueueSize)]: 0,
//       [Symbol(timeout)]: null,
//       [Symbol(kBuffer)]: null,
//       [Symbol(kBufferCb)]: null,
//       [Symbol(kBufferGen)]: null,
//       [Symbol(kCapture)]: false,
//       [Symbol(kSetNoDelay)]: true,
//       [Symbol(kSetKeepAlive)]: false,
//       [Symbol(kSetKeepAliveInitialDelay)]: 0,
//       [Symbol(kBytesRead)]: 0,
//       [Symbol(kBytesWritten)]: 0
//     },
//     _consuming: true,
//     _dumped: false,
//     next: [Function: next],
//     baseUrl: '',
//     originalUrl: '/api/contacts/64b6cff2f0ed4f16df46e64',
//     _parsedUrl: Url {
//       protocol: null,
//       slashes: null,
//       auth: null,
//       host: null,
//       port: null,
//       hostname: null,
//       hash: null,
//       search: null,
//       query: null,
//       pathname: '/api/contacts/64b6cff2f0ed4f16df46e64',
//       path: '/api/contacts/64b6cff2f0ed4f16df46e64',
//       href: '/api/contacts/64b6cff2f0ed4f16df46e64',
//       _raw: '/api/contacts/64b6cff2f0ed4f16df46e64'
//     },
//     params: {},
//     query: {},
//     res: [Circular *2],
//     _startAt: [ 2080, 885406046 ],
//     _startTime: 2023-07-20T20:50:33.762Z,
//     _remoteAddress: '::1',
//     body: { favorite: false },
//     _body: true,
//     length: undefined,
//     route: Route { path: '/:contactId', stack: [Array], methods: [Object] },
//     [Symbol(kCapture)]: false,
//     [Symbol(kHeaders)]: {
//       'content-type': 'application/json',
//       'user-agent': 'PostmanRuntime/7.32.3',
//       accept: '*/*',
//       'postman-token': '167472ba-f2b8-4d37-acb9-3e2fa54c8cd6',
//       host: 'localhost:3000',
//       'accept-encoding': 'gzip, deflate, br',
//       connection: 'keep-alive',
//       'content-length': '27'
//     },
//     [Symbol(kHeadersCount)]: 16,
//     [Symbol(kTrailers)]: null,
//     [Symbol(kTrailersCount)]: 0
//   },
//   _sent100: false,
//   _expect_continue: false,
//   _maxRequestsPerSocket: 0,
//   locals: [Object: null prototype] {},
//   _startAt: undefined,
//   _startTime: undefined,
//   writeHead: [Function: writeHead],
//   __onFinished: [Function: listener] { queue: [ [Function: logRequest] ] },
//   [Symbol(kCapture)]: false,
//   [Symbol(kBytesWritten)]: 0,
//   [Symbol(kNeedDrain)]: false,
//   [Symbol(corked)]: 0,
//   [Symbol(kOutHeaders)]: [Object: null prototype] {
//     'x-powered-by': [ 'X-Powered-By', 'Express' ],
//     'access-control-allow-origin': [ 'Access-Control-Allow-Origin', '*' ]
//   },
//   [Symbol(errored)]: null,
//   [Symbol(kUniqueHeaders)]: null
// }
