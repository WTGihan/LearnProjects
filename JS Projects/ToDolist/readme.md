**center icons or forms**
```
 header,
 form {
     display: flex;
     justify-content: center;
     align-items: center;
 }

```
**Copy items more than one times**

- shift + alt + downkey arrow

**When fontawesome icon not work whole event**

*This is way to fix that*
```
 .fa-trash, .fa-check {
     pointer-events: none;
 }

```

**When icon add to tag**

*This is way to fix that*
>  position: absolute;

```
<!-- append this using js -->
    <!-- <div class="todo">
        <li class="todo-item"></li>
        <button class="completed-btn"></button>
        <button class="trash-btn"></button>
    </div> -->

```

> localstorage.clear();

> when refresh the file not display complted files

> reference from DEV Ed