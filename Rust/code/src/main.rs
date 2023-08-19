use actix_files as fs;
use actix_web::{HttpResponse, Responder};

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{web, App, HttpServer};
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(manual_hello))
            .service(fs::Files::new("/", "src/static"))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
