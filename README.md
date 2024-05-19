# MarimoBattle

## About

## Game specification
### Tentative
- マリモのバトルロワイヤル(スネークゲームのマリモ版)
- 倒した敵が落とす内臓が周辺にあった場合、体に勝手につけて体力アップする。
- 大きいマリモだと内臓が均等に広がるから、小さいマリモの方が内臓の暑さが厚くなる。(追加？)

### If we have time
- 時間があれば、プレーヤーが少ない時に、BOTが操作するようにする。

## System specification
### Use Language
- JavaScriptでクライアントのコード
- PythonでAPIサーバーのコード
- DBでプレイヤーの情報管理
- DockerでWeb, API, DBを管理

### If we have time
- 時間があれば、クライアントのコードをRustで書き直して、実行ファイルを配布できるようにする。
- もっと時間があれば、全てのコードをRustで書き直す。

## File structure
`
.
├── README.md
├── docker-compose.yml
├── end.sh
├── up.sh
└── web
    ├── Cargo.lock
    ├── Cargo.toml
    ├── Dockerfile
    ├── src
    │   └── main.rs
    ├── static
    └── templates
`
