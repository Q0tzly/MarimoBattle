use actix_files as fs;
use actix_web::{web, App, HttpResponse, HttpServer};
use sailfish::TemplateOnce;

#[derive(TemplateOnce)]
#[template(path = "index.stpl")]
struct IndexBase;

#[derive(TemplateOnce)]
#[template(path = "game.stpl")]
struct GameBase;

#[derive(TemplateOnce)]
#[template(path="result.stpl")]
struct ResultBase;

async fn index() -> HttpResponse {
    let base = IndexBase;
    let rendered = base.render_once().unwrap();
    HttpResponse::Ok().content_type("text/html").body(rendered)
}

async fn game() -> HttpResponse {
    let base = GameBase;
    let rendered = base.render_once().unwrap();
    HttpResponse::Ok().content_type("text/html").body(rendered)
}

async fn result() -> HttpResponse {
    let base = ResultBase;
    let rendered = base.render_once().unwrap();
    HttpResponse::Ok().content_type("text/html").body(rendered)
}



#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting server at port 80");

    HttpServer::new(|| {
        App::new()
            .service(fs::Files::new("/static", "static/").show_files_listing())
            .service(fs::Files::new("/img", "img/").show_files_listing())
            .route("/", web::get().to(index))
            .route("/game", web::get().to(game))
            .route("/result",web::get().to(result))
    })
    .bind(("0.0.0.0", 81))?
    .run()
    .await
}
