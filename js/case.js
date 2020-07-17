/**
 * Created by Administrator on 2019/7/4.
 */
//获取地址栏
function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if (!url || url == "") {
        url = window.location.href;
    }
    url = url.substring(url.indexOf("?"));
    r = url.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
}
if(getQueryString('type') == 1){
    $('#cases .location span').html('公司内部管理规章制度');
    var html = ' <p style="text-align: -webkit-left">1、催收人员在催收过程中，作业话术应当符合规范，不得讲粗口，不得使用 暴力、胁迫、恐吓、辱骂、侮辱和黑道性的语言或语气以及任何违法的不当催收方 式进行催告通知,不得作出不符合客观实际和法律规定的行为（如冒用公安机关、 人民法院、人民检察院和人民政府的名义进行催收、提供虚假案件处理信息、夸大 欠款人逾期还款可能要承担的不利后果）。</p><p style="text-align: -webkit-left">2、公司只允许电催工作人员在专用的坐席上进行电话催收作业，禁止使用指定外的电话机（包括个人手机、小灵通，个人家庭电话等等）。</p><p style="text-align: -webkit-left">3、电催作业必须全程录音、记录和保存，包括接电、去电和未接电。</p><p style="text-align: -webkit-left">4、电催作业时间禁止在晚上 21:00 至次日 8:00 进行催收作业，若委托公司另有规 定，可按委托公司的要求进行。</p><p style="text-align: -webkit-left">5、催收人员发出的所有催收信息内容与格式须是经委托公司审核批准的。</p><p style="text-align: -webkit-left">6、催收人员一律不准让客户转款到自己的微信、银行卡等私人账户（代还款账号 除外）。</p><p style="text-align: -webkit-left">7、催收人员在与客户交涉过程中禁止有任何违反我国法律的非法行为或任何有损于公司商誉的不当行为，包括但不限于恐吓、威胁等攻击债务人或第三人人身的催收行为，遇有当事人拒不配合的情况，应当适时停止催收，避免激化矛盾。</p><p style="text-align: -webkit-left">8、在所有直接或间接涉及债务处理的通讯文件及交涉行为中，催收人员应表明 委外催收机构为经委托公司授权的债务处理代理人身份，不得直接以委托公司的名 义采取相关行动。</p><p style="text-align: -webkit-left">9、禁止侵犯债务人或相关第三人的隐私权，请求债务人本人外的其他人员配合或提供信息应征得对方同意，不得影响其正常生活。</p><p style="text-align: -webkit-left">10、在催收过程中，催收人员应审时度势，对可能引起客户投诉的隐患情况做及 时调整并记录下来，密切关注可能发生的投诉升级行为和针对特定催收对象（如学 生，政府工作人员，媒体工作人员等）的催收行为，尽量避免在催收过程中引起的较 大影响的客户投诉，将客户投诉控制在可以控制的范围内并作妥善解决。</p>'
    $('#cases .info').html(html)
}else if(getQueryString('type') == 2){
    $('#cases .location span').html('合作机构');
    $('.info').css('height','1200px');
    $('#cases .info').html('<ul><li><img src="image/company/c1.png" alt=""></li><li><img src="image/company/c4.jpg" alt=""></li><li><img src="image/company/c8.jpg" alt=""></li><li><img src="image/company/c2.jpg" alt=""></li><li><img src="image/company/c3.jpg" alt=""></li><li><img src="image/company/c5.jpg" alt=""></li><li><img src="image/company/c6.jpg" alt=""></li><li><img src="image/company/c7.jpg" alt=""></li><div class="clear"></div></ul>');
}else{
    $('#cases .location span').html('公司组织机构');
    $('#cases .info').html('<img src="image/zzjg.png" class="line-left" alt="">')
}