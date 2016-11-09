declare module "fs-extra-p" {
  import { Stats, WriteStream} from "fs"
  import BluebirdPromise from "bluebird-lst-c"

  export { WriteStream, createReadStream, createWriteStream, FSWatcher, Stats } from "fs"

  export type Filter = (file: string, stat: Stats) => boolean

  export interface CopyOptions {
    clobber?: boolean
    dereference?: boolean
    filter?: RegExp | ((file: string, stat: Stats) => boolean)
    passStats?: boolean
  }

  export interface MoveOptions {
    clobber?: boolean
    limit?: number
  }

  export function copy(src: string, dest: string, options?: CopyOptions): BluebirdPromise<string>

  export function copySync(src: string, dest: string, options?: CopyOptions): BluebirdPromise<void>

  export function move(src: string, dest: string, options?: MoveOptions): BluebirdPromise<any>

  export function ensureFile(path: string): BluebirdPromise<void>

  export function ensureFileSync(path: string): void

  export function createFile(file: string): BluebirdPromise<void>

  export function createFileSync(file: string): void

  export function mkdirs(dir: string, options?: CreateDirOptions): BluebirdPromise<void>

  export function mkdirsSync(dir: string, options?: CreateDirOptions): void

  export function mkdirp(dir: string, options?: CreateDirOptions): BluebirdPromise<void>

  export function mkdirpSync(dir: string, options?: CreateDirOptions): void

  export function outputFile(file: string, data: any): BluebirdPromise<void>

  export function outputFileSync(file: string, data: any): void

  export function outputJson(file: string, data: any): BluebirdPromise<void>

  export function outputJsonSync(file: string, data: any): void

  export function readJson(file: string, options?: OpenOptions): BluebirdPromise<any>

  export function readJsonSync(file: string, options?: OpenOptions): any

  export function remove(dir: string): BluebirdPromise<void>

  export function removeSync(dir: string): void

  interface JsonOptions extends OpenOptions {
    spaces: number
  }

  export function writeJson(file: string, object: any, options?: JsonOptions): BluebirdPromise<void>

  export function writeJsonSync(file: string, object: any, options?: JsonOptions): void

  export function rename(oldPath: string, newPath: string): BluebirdPromise<string>

  export function renameSync(oldPath: string, newPath: string): void

  export function truncate(fd: number, len: number): BluebirdPromise<void>

  export function truncateSync(fd: number, len: number): void

  export function chown(path: string, uid: number, gid: number): BluebirdPromise<void>

  export function chownSync(path: string, uid: number, gid: number): void

  export function fchown(fd: number, uid: number, gid: number): BluebirdPromise<void>

  export function fchownSync(fd: number, uid: number, gid: number): void

  export function lchown(path: string, uid: number, gid: number): BluebirdPromise<void>

  export function lchownSync(path: string, uid: number, gid: number): void

  export function chmod(path: string, mode: string | number): BluebirdPromise<void>

  export function chmodSync(path: string, mode: string | number): void

  export function fchmod(fd: number, mode: string | number): BluebirdPromise<void>

  export function fchmodSync(fd: number, mode: string | number): void

  export function lchmod(path: string, mode: string | number): BluebirdPromise<void>

  export function lchmodSync(path: string, mode: string | number): void

  export function stat(path: string): BluebirdPromise<Stats>

  export function statSync(path: string): Stats

  export function lstat(path: string): BluebirdPromise<Stats>

  export function lstatSync(path: string): Stats

  export function fstat(fd: number): BluebirdPromise<Stats>

  export function fstatSync(fd: number): Stats

  export function link(srcpath: string, dstpath: string): BluebirdPromise<void>

  export function linkSync(srcpath: string, dstpath: string): void

  export function symlink(srcpath: string, dstpath: string, type?: string): BluebirdPromise<void>

  export function symlinkSync(srcpath: string, dstpath: string, type?: string): void

  export function readlink(path: string): BluebirdPromise<string>

  export function realpath(path: string): BluebirdPromise<string>
  export function realpath(path: string, cache: string): BluebirdPromise<string>

  export function realpathSync(path: string, cache?: boolean): string

  export function unlink(path: string): BluebirdPromise<string>

  export function unlinkSync(path: string): void

  export function rmdir(path: string): BluebirdPromise<void>

  export function rmdirSync(path: string): void

  export function mkdir(path: string, mode?: string | number): BluebirdPromise<void>

  export function mkdirSync(path: string, mode?: string | number): void

  export function readdir(path: string): BluebirdPromise<string[]>

  export function close(fd: number): BluebirdPromise<void>

  export function closeSync(fd: number): void

  export function open(path: string, flags: string, mode?: string): BluebirdPromise<number>

  export function openSync(path: string, flags: string, mode?: string): number

  export function utimes(path: string, atime: number, mtime: number): BluebirdPromise<void>

  export function utimesSync(path: string, atime: number, mtime: number): void

  export function futimes(fd: number, atime: number, mtime: number): BluebirdPromise<void>

  export function futimesSync(fd: number, atime: number, mtime: number): void

  export function fsync(fd: number): BluebirdPromise<void>

  export function fsyncSync(fd: number): void

  export function write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: NodeBuffer) => void): BluebirdPromise<number>

  export function writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number

  export function read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: NodeBuffer) => void): BluebirdPromise<number>

  export function readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number

  export function readFile(filename: string, encoding: string): BluebirdPromise<string>
  export function readFile(filename: string, options: OpenOptions): BluebirdPromise<string>
  export function readFile(filename: string): BluebirdPromise<NodeBuffer>

  export function readFileSync(filename: string): NodeBuffer
  export function readFileSync(filename: string, encoding: string): string
  export function readFileSync(filename: string, options: OpenOptions): string

  export function writeFile(filename: string, data: any, encoding?: string): BluebirdPromise<void>
  export function writeFile(filename: string, data: any, options?: OpenOptions): BluebirdPromise<void>

  export function writeFileSync(filename: string, data: any, encoding?: string): void
  export function writeFileSync(filename: string, data: any, option?: OpenOptions): void

  export function appendFile(filename: string, data: any, encoding?: string): BluebirdPromise<void>
  export function appendFile(filename: string, data: any, option?: OpenOptions): BluebirdPromise<void>

  export function appendFileSync(filename: string, data: any, encoding?: string): void
  export function appendFileSync(filename: string, data: any, option?: OpenOptions): void

  export function ensureDir(path: string): BluebirdPromise<void>

  export function ensureDirSync(path: string): void

  export function ensureLink(path: string): BluebirdPromise<void>

  export function ensureLinkSync(path: string): void

  export function ensureSymlink(path: string): BluebirdPromise<void>

  export function ensureSymlinkSync(path: string): void

  export function emptyDir(path: string): BluebirdPromise<void>

  export function emptyDirSync(path: string): boolean

  export function existsSync(path: string): boolean

  export function existsSync(path: string): boolean

  export function access(path: string | NodeBuffer, mode?: number): BluebirdPromise<void>

  export function deleteFile(path: string, ignoreIfNotExists?: boolean): BluebirdPromise<any>

  export interface OpenOptions {
    encoding?: string
    flag?: string
  }

  export interface CreateDirOptions {
    fs?: any
    mode?: number
  }
}