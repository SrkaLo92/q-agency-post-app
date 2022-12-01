import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SelectedPostComponent } from './pages/selected-post/selected-post.component';
import { MainComponent } from './main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, MainComponent, HeaderComponent, ButtonComponent, PostsComponent, AboutComponent, PostComponent, SelectedPostComponent, PreloaderComponent, ContactComponent, FilterPipe, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
