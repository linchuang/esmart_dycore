GLOBAL['#FairKey#'] = (function (__initProps__) {
    const __global__ = this;

    function PermissionPageState() {
        const inner = PermissionPageState.__inner__;
        if (this == __global__) {
            return new PermissionPageState({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            PermissionPageState.prototype.ctor.apply(this, args);
            return this;
        }
    }

    PermissionPageState.__inner__ = function inner() {
        this.isGranted = false;
        this.picUrl = '';
    };
    PermissionPageState.prototype = {
        requestPermission: function requestPermission() {
            const __thiz__ = this;
            with (__thiz__) {
                WBPermission().requestPermission(convertObjectLiteralToSetOrMap({
                    ['pageName']: '#FairKey#',
                    ['args']: convertObjectLiteralToSetOrMap({
                        ['type']: 'Permission_Photo',
                        ['Granted']: function dummy(resp) {
                            isGranted = true;
                            takePhoto();
                        },
                        ['Restricted']: function dummy(resp) {
                            isGranted = false;
                            takePhoto();
                        },
                    }),
                }));
            }
        }, selectFromAlbum: function selectFromAlbum() {
            const __thiz__ = this;
            with (__thiz__) {
                FairPhotoSelector().getPhoto(convertObjectLiteralToSetOrMap({
                    ['pageName']: '#FairKey#',
                    ['args']: convertObjectLiteralToSetOrMap({
                        ['type']: 'album', ['success']: function dummy(resp) {
                            picUrl = resp;
                            setState('#FairKey#', function dummy() {
                            });
                        }, ['failure']: function dummy() {
                        },
                    }),
                }));
            }
        }, takePhoto: function takePhoto() {
            const __thiz__ = this;
            with (__thiz__) {
                FairPhotoSelector().getPhoto(convertObjectLiteralToSetOrMap({
                    ['pageName']: '#FairKey#',
                    ['args']: convertObjectLiteralToSetOrMap({
                        ['type']: 'photo', ['success']: function dummy(resp) {
                            picUrl = resp;
                            setState('#FairKey#', function dummy() {
                            });
                        }, ['failure']: function dummy() {
                        },
                    }),
                }));
            }
        },
    };
    PermissionPageState.prototype.ctor = function () {
        Object.prototype.ctor.call(this);
    };
    ;
    return PermissionPageState();
})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));
