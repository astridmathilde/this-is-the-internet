const convertMsToDays = ms => {
        const msInOneSecond = 1000
        const secondsInOneMinute = 60
        const minutesInOneHour = 60
        const hoursInOneDay = 24

        const minutesInOneDay = hoursInOneDay * minutesInOneHour
        const secondsInOneDay = secondsInOneMinute * minutesInOneDay
        const msInOneDay = msInOneSecond * secondsInOneDay

        return Math.ceil(ms / msInOneDay)
      }

      const daysSinceBirth = (birthDay, today) => {
        let differenceInMs = today.getTime() - birthDay.getTime()

        return convertMsToDays(differenceInMs)
      }

      const ageContainer = document.querySelector('.internet-age')
      const birthDay = new Date("01/01/1983")
      const today = new Date()

      ageContainer.innerHTML = daysSinceBirth(birthDay, today)