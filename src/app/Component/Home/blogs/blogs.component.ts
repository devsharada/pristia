import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [NgFor, RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs=[
    {
      image:"assets/images/blogs/blog1.png",
      alt:"blog1",
       date:"JANUARY 19, 2023",
      title:"Jewelry is an art women have affinity for.",
      link: "/blogs/blog-details"
    },
    {
      image:"assets/images/blogs/blog2.png",
      alt:"blog2",
       date:"JANUARY 19, 2023",
      title:"We make sparkly magic happen",
      link: "/blogs/blog-details"
    },
    {
      image:"assets/images/blogs/blog3.png",
      alt:"blog3",
       date:"JANUARY 19, 2023",
      title:"Jewelry for the free-spirited you",
      link: "/blogs/blog-details"
    },
    {
      image:"/assets/images/blogs/blog4.png",
      alt:"blog4",
       date:"JANUARY 19, 2023",
      title:"We believe that every jewel tells a story",
      link: "/blogs/blog-details"
    },
    ]

}
