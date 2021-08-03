GLOBAL['#FairKey#'] = (function (__initProps__) {
    const __global__ = this;

    function State() {
        const inner = State.__inner__;
        if (this == __global__) {
            return new State({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            State.prototype.ctor.apply(this, args);
            return this;
        }
    }

    State.__inner__ = function inner() {
        Object.__inner__.call(this);
        this._picUrl =
            'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca8065388426576e80dda144ac342596';
        this.description = "大暑，二十四节气之一，夏季最后一个节气。每年的公历7月22日、23日之间，太阳到达黄历120°，是大暑节气。与小暑一样，大暑也是反映夏季炎热程度的节令，而大暑表示天气炎热至极。\n" +
            "\n" +
            "中国古人将大暑分为三候：“一候腐草为萤；二候土润溽暑；三候大雨时行。”大暑节气正值“三伏天”里的“中伏”前后，是一年中最热的时期，气温最高，农作物生长最快，同时，很多地区的旱、涝、风灾等气象灾害也最为频繁。抢收抢种，抗旱排涝防台风和田间管理等任务很重。\n" +
            "  \n" +
            "大暑节气有晒伏姜、喝伏茶、烧伏香、送“大暑船”等习俗。此时天气湿热，很容易导致身体受潮湿气过重。养生既要懂得防暑降温，还要着重祛湿。 ";
    };
    State.prototype = {};
    State.prototype.ctor = function () {
        Object.prototype.ctor.call(this);
    };
    ;
    return State();
})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));
