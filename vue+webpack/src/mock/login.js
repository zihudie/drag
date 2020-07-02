import Mock from 'mockjs'

export default {
  [api.USER_LOGIN]: () => {
    return {
      code: 1,
      data: Mock.mock({
        addressArea: "",
        addressCity: "",
        addressMobile: "",
        addressName: "",
        addressProvince: "",
        addressStreet: "",
        balance: 0,
        birthday: "",
        clientType: 1,
        creditAmount: 0,
        creditStatus: 0,
        deviceId: "2229600309",
        email: "",
        headUrl: "0",
        id: 66171,
        lastUpdate: 1550285306000,
        leftAmount: 0,
        levelId: 0,
        levelName: "",
        loginIp: "58.38.203.61",
        loginTime: null,
        logoutTime: null,
        nickName: "stiyes19",
        online: null,
        parentId: 1,
        parentName: "admin",
        password: "",
        place: "",
        reallyName: "",
        rebateName: "",
        registerDate: 1550285305000,
        registerDomain: "https://m.ballbet.com/register/account",
        registerIp: "58.38.203.61",
        remark: "",
        sex: 1,
        status: 0,
        telephone: "",
        token: "K7SJ9C62DRSuA5sxiz4BYGJCum3sQ8rvTa9ggUpXCHBpCvEcEa04Qg==",
        userRebate: 0,
        userType: 0,
        username: "stiyes19",
      }),
    };
  },
}

