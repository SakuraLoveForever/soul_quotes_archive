"""启动本地预览；每次刷新直接读取最新的 Markdown，无需构建。"""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser

ROOT = Path(__file__).resolve().parent


def create_server():
    return ThreadingHTTPServer(
        ("127.0.0.1", 0), partial(SimpleHTTPRequestHandler, directory=str(ROOT))
    )


def main():
    with create_server() as server:
        url = f"http://127.0.0.1:{server.server_port}/"
        print(f"本地预览：{url}\n修改 Markdown 后刷新网页即可。关闭此窗口或按 Ctrl+C 停止。", flush=True)
        webbrowser.open(url)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
