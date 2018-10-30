/**
 * Created by david on 10/27/2018.
 */
Vue.component('message', {

    props:['title','body'],
    template: `
    <div class="message">
    <h1> {{title}}</h1>
    <p>{{body}}</p>
</div>
    
    `
});