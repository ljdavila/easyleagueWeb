import { slideInOutAnimation } from './../../animations/slideIn-slideOut/slide.animation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInOutAnimationLeft } from '../../animations/slideIn-left';

@Component ({
  selector: 'app-sideform',
  templateUrl: './sideform.component.html',
  styleUrls: ['sideform.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': ''}
})
export class SideFormComponent implements OnInit  {

    title = 'Add Product';
    product: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        // let productId = Number(this.route.snapshot.params['id']);
        // if (productId) {
        //     this.title = 'Edit Product';
        //     this.product = this.productService.getById(productId);
        // }
    }

    saveProduct() {
        // save product
        // this.productService.save(this.product);

        // redirect to users view
        this.router.navigate(['products']);

        // publish event so list controller can refresh
        // this.pubSubService.publish('products-updated');
    }

    closeSideForm() {
        this.router.navigate([ {outlets: {sideform: null}}]);
    }
}

